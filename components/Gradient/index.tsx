import Image from "next/image";
import { cn } from "../../lib/utils";

interface GradientProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Gradient = ({ className }: GradientProps) => {
  return (
    <Image
      className={cn("absolute opacity-15", className)}
      src="/gradient.png"
      fill
      alt="Gradient"
    />
  );
};
