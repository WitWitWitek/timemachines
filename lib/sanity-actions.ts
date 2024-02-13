import { client } from "./sanity";

export async function getCarsData(): Promise<any[]> {
  const query = `*[_type == "cars"] {
      title,
      description
    }`;

  const projectsData = await client.fetch(query);
  return projectsData;
}
