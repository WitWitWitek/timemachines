import Link from "next/link";
import { getCarsData } from "../../lib/sanity-actions";

export const revalidate = 1;

export default async function Home() {
  const cars = await getCarsData();
  return (
    <div>
      {cars &&
        cars.map((car, i) => (
          <div key={i}>
            <h2>{car.model}</h2>
            <ul>
              {car.parameters.map(({ parameterName, parameterValue }, i) => (
                <div key={i}>
                  <li>
                    {parameterName}: {parameterValue}
                  </li>
                </div>
              ))}
              <Link href={`/samochody/${car.slug}`}>Więcej...</Link>
            </ul>
            <hr />
          </div>
        ))}
    </div>
  );
}
