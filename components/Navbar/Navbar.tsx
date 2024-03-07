import Image from "next/image";
import { Button, Wrapper } from "../ui";
import Link from "next/link";
import NavLarge from "./NavLarge/NavLarge";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-16 bg-transparent z-50">
      <header className="w-full h-full flex">
        <Wrapper className="flex flex-row justify-between items-center font-bold text-secondary gap-5">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </Link>
          <NavLarge />
        </Wrapper>
      </header>
    </div>
  );
}
