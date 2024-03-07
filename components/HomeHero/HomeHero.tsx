"use client";
import { HeroSlider } from "../HeroSlider/HeroSlider";
import { motion } from "framer-motion";
import { Button, Wrapper, buttonVariants } from "../ui";
import Link from "next/link";
import { cn } from "../../lib/utils";
type Props = {
  images: string[];
};

export default function HomeHero({ images }: Props) {
  return (
    <HeroSlider className="h-screen flex flex-col" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-40 h-full w-full"
      >
        <motion.div className="h-full mx-auto max-w-screen-xl px-2.5 md:px-20 py-20 flex flex-col justify-end lg:justify-center">
          <div className="flex flex-col justify-end lg:items-start gap-5 w-full lg:w-1/2">
            <p className="text-primary font-bold text-left">
              Zakochaj się w naszych klasykach!
            </p>

            <motion.div className="font-bold text-3xl md:text-6xl text-secondary">
              Najlepsze klasyki w Warszawie od{" "}
              <span className="text-primary">Timemachines</span>
            </motion.div>
            <p className="text-secondary">
              Zamów furę i nie czekaj, to jedyna taka okazja by przejechać się
              oldschoolową furką.
            </p>
            <div className="flex gap-3">
              <Link
                href="/samochody"
                className={buttonVariants({ variant: "default" })}
              >
                Klasyki
              </Link>
              <Link
                href="/samochody"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-secondary"
                )}
              >
                Zobacz promo
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </HeroSlider>
  );
}
