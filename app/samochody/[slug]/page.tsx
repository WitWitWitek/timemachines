import { PortableText } from "@portabletext/react";
import { getSingleCarData } from "../../../lib/sanity-actions";
import { getGalleryImages } from "../../../lib/sanity-images";
import ImageSlider from "../../../components/ImageSlider";

export default async function CarPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, gallery } = await getSingleCarData(params.slug);

  return (
    <div>
      <ImageSlider urls={getGalleryImages(gallery)} />
      <PortableText value={content} />
    </div>
  );
}
