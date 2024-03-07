"use client";

import { NavLink, Sheet, SheetContent, SheetTrigger } from "../../ui";
import { useState } from "react";
import { ChevronDownCircle } from "lucide-react";
import NavList from "./NavList";

export default function NavMobile() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger
          className="flex justify-center lg:hidden"
          aria-label="menu button"
        >
          <ChevronDownCircle className="h-7 w-7 text-secondary hover:text-primary" />
        </SheetTrigger>
        <SheetContent side="top" className="py-16">
          <NavList setSheetOpen={setSheetOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
