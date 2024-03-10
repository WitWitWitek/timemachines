import { NavLink } from "../../ui";
import { routes } from "../../../constants";
import React from "react";

type Props = {
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NavList({ setSheetOpen }: Props) {
  return (
    <nav className="flex flex-col gap-5">
      {routes.map((route, i) => (
        <NavLink
          key={i}
          href={route.href}
          className="text-seconadry-foreground text-xl"
          onClick={() => setSheetOpen(false)}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
}
