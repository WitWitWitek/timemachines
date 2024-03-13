"use client";
import Image from "next/image";
import { Wrapper } from "../ui";
import Link from "next/link";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [bgDark, setBgDark] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (scrolValue) =>
    scrolValue > 0 ? setBgDark(true) : setBgDark(false)
  );

  return (
    <div
      className={cn("fixed top-0 inset-x-0 h-16 z-50 transition-colors", {
        "bg-foreground": bgDark,
      })}
    >
      <header className="w-full h-full flex">
        <Wrapper className="flex flex-row justify-between items-center font-bold text-secondary gap-5">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </Link>
          <NavMobile />
          <NavDesktop />
        </Wrapper>
      </header>
    </div>
  );
}
