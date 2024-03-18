import { Section, Wrapper } from "../ui";
import { perks } from "../../constants";
import { lobster } from "../../app/fonts";

export default function Perks() {
  return (
    <Section className="md:h-screen">
      <Wrapper className="h-full flex flex-col justify-between gap-10">
        <h2
          className={`${lobster.className} text-center text-primary text-4xl md:text-6xl`}
        >
          Wynajmij klasyka <br />i przenieś się w czasie
        </h2>
        <div className="flex-1 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-0 place-content-center lg:h-[55%]">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:flex lg:flex-col lg:text-center lg:justify-start lg:items-center lg:gap-1"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-24 w-24 flex items-center justify-center rounded-full bg-primary/60 text-secondary-foreground">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3
                  className={
                    "text-bold text-2xl font-medium text-secondary-foreground tracking-wider"
                  }
                >
                  {perk.name}
                </h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}
