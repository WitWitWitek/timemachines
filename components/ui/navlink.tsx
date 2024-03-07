"use client";

import Link from "next/link";
import { buttonVariants } from ".";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children, ...props }: LinkProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: "link" }), "relative")}
      {...props}
    >
      {children}
      {href === path && (
        <div className="absolute top-8 h-2 w-2 rounded-full bg-primary" />
      )}
    </Link>
  );
}
