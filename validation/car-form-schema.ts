import * as z from "zod";

export const CarFormSchema = z
  .object({
    fullname: z
      .string()
      .min(2, {
        message: "Imię i nazwisko powinny zawierać co najmniej 2 znaki.",
      })
      .max(100, {
        message: "Imię i nazwisko powinny zawierać maksymalnie 100 znaków.",
      }),
    email: z
      .string()
      .min(2, {
        message: "Email powinien zawierać co najmniej 2 znaki.",
      })
      .email({ message: "Adres e-mail nie jest poprawny." }),
    startDate: z
      .date({
        required_error: "Początkowa data wynajmu jest wymagana.",
      })
      .min(new Date(new Date().setHours(0, 0, 0, 0)), {
        message: "Data nie może pochodzić z przeszłości.",
      }),
    endDate: z
      .date({
        required_error: "Końcowa data wynajmu jest wymagana.",
      })
      .min(new Date(new Date().setHours(0, 0, 0, 0)), {
        message: "Data nie może pochodzić z przeszłości.",
      }),
    message: z
      .string()
      .min(2, {
        message: "Wiadomość powinna zawierać co najmniej 2 znaki.",
      })
      .max(1000, {
        message: "Wiadomośc powinna zawierać maksymalnie 1000 znaków.",
      }),
    link: z.string(),
  })
  .refine(
    (schema) =>
      new Date(schema.endDate).getTime() >=
      new Date(schema.startDate).getTime(),
    {
      message: "Data końcowa musi być większa niż poczatkowa!",
      path: ["endDate"],
    }
  );

export type TCarFormSchema = z.infer<typeof CarFormSchema>;
