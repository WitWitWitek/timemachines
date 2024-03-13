import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  buttonVariants,
} from "../ui";
import { Car } from "../../types";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import { lobster } from "../../app/fonts";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="w-full grid gap-2 overflow-hidden bg-transparent">
      <CardHeader className="w-full h-[250px] relative ">
        <Image
          src={urlFor(car.coverImage).url()}
          alt={car.model}
          fill
          className="rounded-sm"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle
          className={`${lobster.className} text-left text-secondary tracking-wide`}
        >
          {car.model}
        </CardTitle>
      </CardContent>
      <CardFooter className="flex justify-center w-full p-4">
        <Link
          href={`/samochody/${car.slug}`}
          className={buttonVariants({
            variant: "default",
            className: "w-full text-primary-foreground font-bold",
          })}
        >
          ZOBACZ PROFIL
        </Link>
      </CardFooter>
    </Card>
  );
}
