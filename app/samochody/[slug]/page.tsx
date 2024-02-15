import { PortableText } from "@portabletext/react";
import { getSingleCarData } from "../../../lib/sanity-actions";

export default async function CarPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content } = await getSingleCarData(params.slug);
  return (
    <div>
      <PortableText value={content} />
    </div>
  );
}
