import { PortableText } from "@portabletext/react";
import { getSingleCarData } from "../../../lib/sanity-actions";
import { getGalleryImages } from "../../../lib/sanity-images";
import ImageSlider from "../../../components/ImageSlider";
import { notFound } from "next/navigation";
import CarForm from "../../../components/CarForm";
import { Section, Wrapper } from "../../../components/ui";

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
    <Section className="bg-slate-900">
      <Wrapper className="relative">
        <div className="flex flex-row gap-5">
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="text-4xl text-primary font-bold">
              {singleCar.model}
            </h2>
            <ul className="text-muted-foreground text-xl">
              {singleCar.parameters.map((param, i) => (
                <li key={i}>
                  {param.parameterName}: {param.parameterValue}
                </li>
              ))}
            </ul>
            <CarForm />
            <div className="text-secondary text-justify">
              <PortableText value={content} />
            </div>
          </div>
          <div className="sticky top-16 w-1/2 h-10">
            <ImageSlider urls={getGalleryImages(gallery)} />
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
