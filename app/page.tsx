import Link from "next/link";
import { getCarsData } from "../lib/sanity-actions";
import CarCard from "../components/CarCard";
import BlankCard from "../components/BlankCard";
import { Wrapper } from "../components/ui";

export const revalidate = 1;

export default async function Home() {
  const cars = await getCarsData();
  return (
    <>
      <Wrapper className="h-screen flex flex-wrap gap-3">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
        <BlankCard />
      </Wrapper>
      <Wrapper className="h-screen flex flex-wrap gap-3">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
        <BlankCard />
      </Wrapper>
    </>
  );
}
