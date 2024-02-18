import { toast } from "sonner";
import { useState } from "react";
import { CarFormSchema, TCarFormSchema } from "../validation/car-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<TCarFormSchema>({
    resolver: zodResolver(CarFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      startDate: undefined,
      endDate: undefined,
      message: "",
      link: "",
    },
  });

  async function sendContactFormHandler(values: TCarFormSchema) {
    try {
      setIsLoading(() => true);
      setIsSuccess(() => false);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/check-availability`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values }),
        }
      );
      const data = (await response.json()) as { message: string };
      response.ok && form.reset();
      toast.success(data.message);
    } catch (err) {
      toast.error("Wystąpił problem w trakcie wysyłania wiadomości.");
    } finally {
      setIsLoading(() => false);
    }
  }

  return {
    form,
    isSuccess,
    isLoading,
    sendContactFormHandler,
  };
};

export default useContactForm;
