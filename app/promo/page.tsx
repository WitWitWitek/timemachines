import Link from "next/link";
import { Section, Wrapper, buttonVariants } from "../../components/ui";
import { BsYoutube } from "react-icons/bs";
export default function page() {
  return (
    <Section className="bg-foreground h-screen min-h-screen-[unset]">
      <Wrapper className="w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/8F-WjCOr6Io?si=qCtvvWnMsj3axKW-"
            title="Embedded youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            className="absolute inset-0 md:h-full w-full md:max-w-full aspect-video m-auto rounded-sm"
          />
        </div>
        <div className="w-full md:hidden flex justify-center">
          <Link
            href="https://youtu.be/8F-WjCOr6Io?feature=shared"
            className={buttonVariants({ variant: "default" })}
          >
            Zobacz promo w serwisie
            <span className="flex flex-row gap-1 items-center ml-1 font-bold">
              <BsYoutube /> YouTube
            </span>
          </Link>
        </div>
      </Wrapper>
    </Section>
  );
}
