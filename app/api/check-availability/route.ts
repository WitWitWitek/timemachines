import { NextResponse, NextRequest } from "next/server";
import { transporter } from "../../../lib/nodemailer";
import DOMPurify from "isomorphic-dompurify";
import { TCarFormSchema } from "../../../validation/car-form-schema";
import { formatPLDate } from "../../../lib/format-date";

export async function POST(request: NextRequest) {
  try {
    const { fullname, email, message, startDate, endDate, link } =
      (await request.json()) as TCarFormSchema;

    if (!fullname || !email || !message || !startDate || !endDate) {
      return NextResponse.json(
        { message: "Wszystkie pola są wymagane!" },
        { status: 500 }
      );
    }

    const cleanedFullname = DOMPurify.sanitize(fullname);
    const cleanedEmail = DOMPurify.sanitize(email);
    const cleanedMessage = DOMPurify.sanitize(message);

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.RECIPENT_EMAIL,
      subject: "Wiadomość z formularza kontaktowego",
      html: `
      <div>
          <p>Imię i nazwisko: ${cleanedFullname}</p>
          <p>E-mail: ${cleanedEmail}</p>
          <p>Data początkowa: ${formatPLDate(startDate)}</p>
          <p>Data końcowa: ${formatPLDate(endDate)}</p>
          <p>Wiadomość: ${cleanedMessage}</p>
          <p>Dotyczy: ${process.env.NEXT_PUBLIC_SERVER_URL}${link}</p>
      </div>`,
    };

    await transporter.sendMail({ ...mailOptions });
    return NextResponse.json(
      { message: "Email został wysłany." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Wystąpił błąd w trakcie wysyłania wiadomości." },
      { status: 500 }
    );
  }
}
