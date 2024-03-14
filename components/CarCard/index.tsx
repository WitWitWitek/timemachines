import Link from "next/link";
import { Card, CardContent, CardTitle, buttonVariants } from "../ui";
import { Car } from "../../types";
import { urlFor } from "../../lib/sanity";
import { lobster } from "../../app/fonts";

import { BsPersonFill, BsCalendar2Fill, BsFuelPumpFill } from "react-icons/bs";
type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const photoURL = urlFor(car.coverImage).url();
  return (
    <Card
      className="relative w-full h-[350px] grid gap-2 overflow-hidden bg-cover bg-center border-0"
      style={{ backgroundImage: `url('${photoURL}')` }}
    >
      <div className="absolute inset-0 w-full h-full bg-foreground/40 z-10" />
      <CardContent className="p-4 flex flex-col justify-between z-20">
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
    </Card>
  );
}
