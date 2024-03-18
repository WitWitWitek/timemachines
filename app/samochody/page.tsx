import { getCarsData } from "../../lib/sanity-actions";
import CarCard from "../../components/CarCard";
import { Wrapper, Section } from "../../components/ui";
import { urlFor } from "../../lib/sanity";
import { Gradient } from "../../components/Gradient";

export const revalidate = 120;

export default async function Home() {
  const cars = await getCarsData();
  const carMapped = cars.map((car) => ({
    ...car,
    coverImage: urlFor(car.coverImage).url(),
  }));

  const carArray = [...carMapped, ...[...carMapped].reverse(), ...carMapped];

  return (
    <Section className="bg-foreground relative">
      <Wrapper className="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-16 md:gap-7 lg:gap-4">
        {cars && carArray.map((car, i) => <CarCard key={i} car={car} />)}
      </Wrapper>
      <Gradient />
    </Section>
  );
}
