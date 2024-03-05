import { getCarsData } from "../lib/sanity-actions";
import { getGalleryImages } from "../lib/sanity-images";
import HomeHero from "../components/HomeHero/HomeHero";

export const revalidate = 120;

export default async function Home() {
  const cars = await getCarsData();
  const carsImages = getGalleryImages(cars.map((car) => car.coverImage));
  return <HomeHero images={carsImages} />;
}
