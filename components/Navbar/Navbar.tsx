import { Wrapper } from "../ui";

export default function Navbar() {
  return (
    <div className="sticky top-0 inset-x-0 h-12 bg-primary">
      <header>
        <Wrapper className="flex flex-row justify-between">
          <div>Logo</div>
          <nav className="flex flex-row gap-3">
            <div>Samochody</div>
            <div>Kontakt</div>
          </nav>
        </Wrapper>
      </header>
    </div>
  );
}
