import { Section, Wrapper } from "../ui";
import { lobster } from "../../app/fonts";
import { offerItems } from "../../constants";
import { LucideIcon } from "lucide-react";

const OfferItem = ({
  offer,
}: {
  offer: {
    text: string;
    Icon: LucideIcon;
  };
}) => (
  <li className="px-10 py-10 flex flex-col items-center justify-start bg-foreground/20 rounded-sm shadow-lg hover:bg-primary/80">
    <div className="grid place-items-center gap-5">
      <div className="w-16 aspect-square bg-foreground grid place-items-center text-secondary rounded-sm shadow-lg">
        <offer.Icon className="w-1/2 h-1/2" />
      </div>
      <p className="text-xl text-center">{offer.text}</p>
    </div>
  </li>
);

export default function Offer() {
  return (
    <Section>
      <Wrapper className="h-full flex flex-col gap-5">
        <h2
          className={`${lobster.className} text-center text-primary text-4xl md:text-6xl`}
        >
          Nasze usługi
        </h2>
        <ul className="flex-1 grid lg:grid-rows-2 gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {offerItems.map((offer, i) => (
            <OfferItem key={i} offer={offer} />
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
}
