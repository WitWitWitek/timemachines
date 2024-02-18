// import { useToast } from "@witekrychlik/ui-components";
import { useState } from "react";
import * as z from "zod";
import { CarFormSchema, TCarFormSchema } from "../validation/car-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const { toast } = useToast();

  const form = useForm<TCarFormSchema>({
    resolver: zodResolver(CarFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      startDate: undefined,
      endDate: undefined,
      message: "",
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
      // toast({
      //   title: data.message,
      //   variant: response.ok ? "default" : "destructive",
      // });
    } catch (err) {
      // toast({
      //   title: "Wystąpił problem w trakcie wysyłania wiadomości.",
      //   variant: "destructive",
      // });
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
