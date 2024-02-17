"use client";

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui";
import * as z from "zod";
import { formSchema } from "../../validation/car-form-schema";
import useContactForm from "../../hooks/use-form";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

export default function ContactForm() {
  const { form, sendContactFormHandler, isLoading } = useContactForm();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    sendContactFormHandler(values);
  };

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="fullname"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i nazwisko:</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="jan.kowalski@mail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="message"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wiadomość:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Treść wiadomości..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="startDate"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Początek wynajmu:</FormLabel>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-[300px] justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Wybierz datę</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="single"
                          defaultMonth={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="endDate"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Koniec wynajmu:</FormLabel>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-[300px] justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Wybierz datę</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="single"
                          defaultMonth={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <Button type="submit" disabled={isLoading}>
              Wyślij
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
