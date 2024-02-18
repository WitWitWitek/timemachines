import { NextResponse, NextRequest } from "next/server";
import { transporter } from "../../../lib/nodemailer";
import DOMPurify from "isomorphic-dompurify";
import { TCarFormSchema } from "../../../validation/car-form-schema";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
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
    const formatLocalDate = (date: Date) =>
      format(date, "dd MMMM yyyy", {
        locale: pl,
      });
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.RECIPENT_EMAIL,
      subject: "Wiadomość z formularza kontaktowego",
      html: `
      <div>
          <p>Imię i nazwisko: ${cleanedFullname}</p>
          <p>E-mail: ${cleanedEmail}</p>
          <p>Data początkowa: ${formatLocalDate(startDate)}</p>
          <p>Data końcowa: ${formatLocalDate(endDate)}</p>
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
