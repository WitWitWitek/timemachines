import { Section, Wrapper } from "../../components/ui";

export default function page() {
  return (
    <Section className="bg-slate-900 h-screen min-h-screen-[unset]">
      <Wrapper className="w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/8F-WjCOr6Io?si=qCtvvWnMsj3axKW-"
            title="Embedded youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            className="absolute inset-0 h-full aspect-video mx-auto rounded-sm"
          />
        </div>
      </Wrapper>
    </Section>
  );
}
