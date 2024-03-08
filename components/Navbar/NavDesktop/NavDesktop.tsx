import { buttonVariants, NavLink } from "../../ui";
import Link from "next/link";
import { routes } from "../NavRoutes";
export default function NavDesktop() {
  return (
    <nav className="hidden flex-1 lg:flex flex-row justify-end gap-3 z-50">
      <div className="flex flex-1 flex-row justify-center gap-3">
        {routes.map((route, i) => (
          <NavLink key={i} href={route.href}>
            {route.label}
          </NavLink>
        ))}
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
