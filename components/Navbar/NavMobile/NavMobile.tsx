"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../../ui";
import { useState } from "react";
import { ChevronDownCircle } from "lucide-react";

export default function NavMobile() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="flex justify-center lg:hidden">
          <ChevronDownCircle className="h-7 w-7 text-secondary hover:text-primary" />
        </SheetTrigger>
        <SheetContent side="top">
          <nav>
            <Link href="/" onClick={() => setSheetOpen(false)}>
              Samochody
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
