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
    <Card className="w-[300px] grid">
      <CardHeader className="flex justify-center">
        <CardTitle className="text-center">{car.model}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={urlFor(car.coverImage).url()}
          alt={car.model}
          height={300}
          width={300}
        />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href={`/samochody/${car.slug}`} className={buttonVariants()}>
          ZOBACZ PROFIL
        </Link>
      </CardFooter>
    </Card>
  );
}
