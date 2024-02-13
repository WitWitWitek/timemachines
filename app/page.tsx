import { getCarsData } from "../lib/sanity-actions";

export default async function Home() {
  const data = await getCarsData();
  console.log(data);
  return <div></div>;
}
