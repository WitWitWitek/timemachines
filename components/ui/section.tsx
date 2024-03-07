import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <section className={cn(" min-h-screen py-20", props.className)}>
      {children}
    </section>
  );
}
