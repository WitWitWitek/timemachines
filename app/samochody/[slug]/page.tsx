import { PortableText } from "@portabletext/react";
import { getSingleCarData } from "../../../lib/sanity-actions";
import { getGalleryImages } from "../../../lib/sanity-images";
import ImageSlider from "../../../components/ImageSlider";
import { notFound } from "next/navigation";
import CarForm from "../../../components/CarForm";
import { Section } from "../../../components/ui";

export const revalidate = 120;

export default async function CarPage({
  params,
}: {
  params: { slug: string };
}) {
  const singleCar = await getSingleCarData(params.slug);
  if (!singleCar) return notFound();

  const { content, gallery } = singleCar;
  return (
    <Section className="bg-slate-800">
      <CarForm />
      <ImageSlider urls={getGalleryImages(gallery)} />
      <PortableText value={content} />
    </Section>
  );
}
