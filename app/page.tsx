import { getCarsData } from "../lib/sanity-actions";

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
                <li key={i}>
                  {parameterName}: {parameterValue}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ))}
    </div>
  );
}
