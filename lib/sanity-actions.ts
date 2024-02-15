import { client } from "./sanity";
import { Car, SingleCar } from "../types";
export async function getCarsData(): Promise<Car[]> {
  const query = `*[_type == "cars"] {
      model,
      "slug": slug.current,
      parameters
    }`;

  const carsData = await client.fetch(query);
  return carsData;
}

export async function getSingleCarData(slug: string): Promise<SingleCar> {
  const query = `*[_type == "cars" && slug.current == '${slug}'] {
      model,
      "slug": slug.current,
      parameters,
      content,
      gallery
    }[0]`;

  const singleCarData = await client.fetch(query);
  return singleCarData;
}
