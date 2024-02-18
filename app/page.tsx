import Link from "next/link";
import { getCarsData } from "../lib/sanity-actions";
import CarCard from "../components/CarCard";
import BlankCard from "../components/BlankCard";

export const revalidate = 1;

export default async function Home() {
  const cars = await getCarsData();
  return (
    <div className="bg-primary h-screen">
      <div className="flex gap-3">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
        <BlankCard />
      </div>
    </div>
  );
}
