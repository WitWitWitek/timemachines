import Link from "next/link";
import { getCarsData } from "../../lib/sanity-actions";
import CarCard from "../../components/CarCard";

export const revalidate = 1;

export default async function Home() {
  const cars = await getCarsData();
  return (
    <div className="bg-primary h-screen">
      {cars && cars.map((car, i) => <CarCard key={i} car={car} />)}
    </div>
  );
}
