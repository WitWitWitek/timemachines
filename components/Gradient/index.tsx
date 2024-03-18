import Image from "next/image";

export const Gradient = () => {
  return (
    <Image
      className="absolute top-50 left-0 opacity-10"
      src="/gradient.png"
      fill
      alt="Gradient"
    />
  );
};
