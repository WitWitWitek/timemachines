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

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="w-full grid gap-2 overflow-hidden border-0 bg-transparent">
      <CardHeader className="w-full h-[250px] relative ">
        <Image
          src={urlFor(car.coverImage).url()}
          alt={car.model}
          fill
          className="rounded-sm"
        />
      </CardHeader>
      <CardContent className="p-2">
        <CardTitle className="text-left text-secondary">{car.model}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-center w-full p-0">
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
