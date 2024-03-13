import { Section, Wrapper } from "../ui";
import { lobster } from "../../app/fonts";
import Image from "next/image";

export default function Description() {
  return (
    <Section className=" bg-foreground">
      <Wrapper className="h-full flex flex-col gap-20">
        <h2
          className={`${lobster.className} text-center text-primary text-4xl md:text-6xl`}
        >
          Podróż w czasie z klasyczną motoryzacją
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-36">
          <div className="text-justify text-lg text-secondary flex flex-col gap-5">
            <p>
              Wsiądź do klasyka ze swojej ulubionej epoki i poczuj klimat.
              Prowadzimy wynajem klasycznych samochodów na terenie Warszawy i
              okolic. Nasze auta uświetniają produkcje, filmy, zdjęcia, wesela i
              inne imprezy okolicznościowe. Jesteśmy elastyczni w dostosowaniu
              się do potrzeb Klientów.
            </p>
            <p>
              Umożliwiamy wynajem wielu klasyków w jednym miejscu przy minimum
              formalności. Jeśli szukasz samochodu, którego nie znalazłeś w
              naszej ofercie, koniecznie się odezwij. Mamy dostęp do wielu
              współczesnych i klasycznych aut.
            </p>
            <p>
              Wynajmowane klasyki prowadzone są przez kierowców posiadających
              szeroką wiedzę na temat klasycznej motoryzacji. Z największą
              przyjemnością opowiedzą o każdym z samochodów.
            </p>
          </div>
          <div className="relative flex flex-col justify-center w-full">
            <div className="relative w-full h-[350px] triangle z-10">
              <Image
                src="/about-us.webp"
                alt="About us cover picture"
                fill
                className="objet-fit"
              />
            </div>
            <div className="absolute inset-0 rotate-180 triangle bg-primary/60 z-0" />
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
