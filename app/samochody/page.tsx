import { getCarsData } from "../../lib/sanity-actions";
import CarCard from "../../components/CarCard";
import { Wrapper, Section } from "../../components/ui";

export const revalidate = 120;

export default async function Home() {
  const cars = await getCarsData();
  return (
    <Section className="bg-slate-900">
      <Wrapper className="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-16 md:gap-7 lg:gap-4">
        {cars && cars.map((car, i) => <CarCard key={i} car={car} />)}
        {cars && cars.map((car, i) => <CarCard key={i} car={car} />)}
        {cars && cars.map((car, i) => <CarCard key={i} car={car} />)}
      </Wrapper>
    </Section>
  );
}
