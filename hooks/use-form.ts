import { toast } from "sonner";
import { useState } from "react";
import { FieldValues, UseFormReturn, useForm } from "react-hook-form";

function useCarForm<T extends FieldValues>(
  form: UseFormReturn<T>,
  endpoint: string
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  async function sendFormHandler(values: T) {
    try {
      setIsLoading(() => true);
      setIsSuccess(() => false);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}${endpoint}`,
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
    sendFormHandler,
  };
}

export default useCarForm;
