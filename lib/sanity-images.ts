import { urlFor } from "./sanity";

export const getGalleryImages = (images: any[]) =>
  images.map((image) => urlFor(image).url());
