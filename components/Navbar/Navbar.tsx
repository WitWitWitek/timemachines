import Image from "next/image";
import { Wrapper } from "../ui";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-12 bg-transparent z-50">
      <header className="w-full h-full flex">
        <Wrapper className="flex flex-row justify-between items-center font-bold text-secondary">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <nav className="flex flex-row gap-3">
            <div>Samochody</div>
            <div>Kontakt</div>
          </nav>
        </Wrapper>
      </header>
    </div>
  );
}
