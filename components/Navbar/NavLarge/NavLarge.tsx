import { buttonVariants } from "../../ui";
import Link from "next/link";

export default function NavLarge() {
  return (
    <nav className="flex-1 flex flex-row justify-end gap-3">
      <div className="flex flex-1 flex-row justify-center gap-3">
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          Strona główna
        </Link>
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          Samochody
        </Link>
      </div>
      <div>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Wynajmij klasyka
        </Link>
      </div>
    </nav>
  );
}
