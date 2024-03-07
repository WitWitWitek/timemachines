import { buttonVariants, NavLink } from "../../ui";
import Link from "next/link";

export default function NavDesktop() {
  return (
    <nav className="hidden flex-1 lg:flex flex-row justify-end gap-3">
      <div className="flex flex-1 flex-row justify-center gap-3">
        <NavLink href="/">Strona Główna</NavLink>
        <NavLink href="/samochody">Samochody</NavLink>
      </div>
      <div>
        <Link
          href="/samochody"
          className={buttonVariants({ variant: "outline" })}
        >
          Wynajmij klasyka
        </Link>
      </div>
    </nav>
  );
}
