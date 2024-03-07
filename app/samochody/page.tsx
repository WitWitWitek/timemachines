import { getCarsData } from "../../lib/sanity-actions";
import CarCard from "../../components/CarCard";
import { Wrapper, Section } from "../../components/ui";

export const revalidate = 1;

export default async function Home() {
  const cars = await getCarsData();
  return (
    <Section className="bg-slate-800">
      <Wrapper>
        {cars && cars.map((car, i) => <CarCard key={i} car={car} />)}
      </Wrapper>
    </Section>
  );
}
