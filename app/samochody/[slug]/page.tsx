import { PortableText } from "@portabletext/react";
import { getSingleCarData } from "../../../lib/sanity-actions";
import { getGalleryImages } from "../../../lib/sanity-images";
import ImageSlider from "../../../components/ImageSlider";
import { notFound } from "next/navigation";
import ContactForm from "../../../components/CarForm";

export const revalidate = 1;

export default async function CarPage({
  params,
}: {
  params: { slug: string };
}) {
  const singleCar = await getSingleCarData(params.slug);
  if (!singleCar) return notFound();

  const { content, gallery } = singleCar;
  return (
    <div>
      <ContactForm />
      <ImageSlider urls={getGalleryImages(gallery)} />
      <PortableText value={content} />
    </div>
  );
}
