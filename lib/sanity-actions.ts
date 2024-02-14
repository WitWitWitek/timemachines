import { client } from "./sanity";
import { Car } from "../types";
export async function getCarsData(): Promise<Car[]> {
  const query = `*[_type == "cars"] {
      model,
      parameters
    }`;

  const projectsData = await client.fetch(query);
  return projectsData;
}
