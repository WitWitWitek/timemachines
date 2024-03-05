"use client";
import { HeroSlider } from "../HeroSlider/HeroSlider";
import { motion } from "framer-motion";
import { Button } from "../ui";
type Props = {
  images: string[];
};

export default function HomeHero({ images }: Props) {
  return (
    <HeroSlider className="h-screen" images={images}>
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Timemachines <br /> najlepsze autka
        </motion.p>
        <Button variant="secondary">Join now →</Button>
      </motion.div>
    </HeroSlider>
  );
}
