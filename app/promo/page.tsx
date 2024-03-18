import Link from "next/link";
import { Section, Wrapper, buttonVariants } from "../../components/ui";
import { BsYoutube } from "react-icons/bs";
import { Gradient } from "../../components/Gradient";
export default function page() {
  return (
    <Section className="relative bg-foreground h-screen min-h-screen-[unset]">
      <Wrapper className="w-full h-full flex">
        <div className="relative hidden md:block w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/8F-WjCOr6Io?si=qCtvvWnMsj3axKW-"
            title="Embedded youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            className="absolute inset-0 md:h-full w-full md:max-w-full aspect-video m-auto rounded-sm"
          />
        </div>
        <div className="w-full md:hidden flex flex-col justify-center items-center gap-5">
          <p className="text-3xl text-secondary text-center">
            Wideo promocyjne nie jest dostępne w wersji na telefon. Przejdz do
            aplikacji <span className="text-primary font-bold">YouTube</span>, z
            naszym filmem promocyjnym:
          </p>
          <Link
            href="https://youtu.be/8F-WjCOr6Io?feature=shared"
            className={buttonVariants({
              variant: "default",
              className: "w-full",
            })}
            target="_blank"
          >
            Zobacz promo w serwisie
            <span className="flex flex-row gap-1 items-center ml-1 font-bold">
              <BsYoutube /> YouTube
            </span>
          </Link>
        </div>
      </Wrapper>
      <Gradient />
    </Section>
  );
}
