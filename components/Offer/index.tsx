import { Card, Section, Wrapper } from "../ui";
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
  <Card className="flex flex-col items-center justify-start rounded-sm shadow-lg hover:bg-primary/80">
    <div className="px-10 py-5 flex flex-col justify-start gap-5 items-center mt-10">
      <div className="w-16 aspect-square bg-foreground grid place-items-center text-secondary rounded-sm shadow-lg">
        <offer.Icon className="w-1/2 h-1/2" />
      </div>
      <p className="text-lg md:text-2xl text-center">{offer.text}</p>
    </div>
  </Card>
);

export default function Offer() {
  return (
    <Section className="md:h-screen">
      <Wrapper className="h-full w-full flex flex-col gap-5">
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
