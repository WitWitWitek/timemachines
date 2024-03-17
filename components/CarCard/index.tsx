"use client";

import Link from "next/link";
import { Card, CardContent, CardTitle, buttonVariants } from "../ui";
import { Car } from "../../types";
import { lobster } from "../../app/fonts";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPersonFill, BsCalendar2Fill, BsFuelPumpFill } from "react-icons/bs";
import Image from "next/image";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const photoURL = car.coverImage;

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <Card className="overflow-hidden border-0 h-[350px]">
      <motion.div
        onMouseEnter={handleMouseEnter}
        className="relative w-full h-full grid gap-2 bg-cover bg-center z-10"
        ref={ref}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0 h-full w-full z-10"
            initial="initial"
            whileHover={direction}
            exit="exit"
          >
            <motion.div className="absolute inset-0 w-full h-full bg-foreground/40 z-20 transition duration-500" />
            <motion.div
              className="h-full w-full relative z-10 flex"
              variants={variants}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <Image
                alt="image"
                className="h-full w-full object-cover scale-[1.15]"
                fill
                src={photoURL}
              />
            </motion.div>
            <motion.div className="absolute inset-0 z-40 w-full h-full flex">
              <CardContent className="relative p-4 flex-1 flex flex-col justify-between z-20">
                <CardTitle
                  className={`${lobster.className} text-secondary text-center tracking-wide text-2xl md:text-3xl`}
                >
                  {car.model}
                </CardTitle>
                <div className="w-full flex flex-col gap-2 text-secondary/80 font-bold text-lg">
                  <ul className="w-full flex flex-row gap-5 justify-center">
                    <li className="flex gap-1 items-center">
                      <BsFuelPumpFill /> V8 5L
                    </li>
                    <li className="flex gap-1 items-center">
                      <BsCalendar2Fill /> 1970
                    </li>
                    <li className="flex gap-1 items-center">
                      <BsPersonFill /> 4
                    </li>
                  </ul>
                  <Link
                    href={`/samochody/${car.slug}`}
                    className={buttonVariants({
                      variant: "default",
                      className: "w-full text-primary-foreground font-bold",
                    })}
                  >
                    ZOBACZ PROFIL
                  </Link>
                </div>
              </CardContent>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Card>
  );
}

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};
