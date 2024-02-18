import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle, buttonVariants } from "../ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
export default function BlankCard() {
  return (
    <Card className="w-[300px] flex flex-col justify-between">
      <CardHeader className="text-center">
        <CardTitle>Sprawdź wszystkie</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Link href={`/samochody`} className={cn(buttonVariants(), "w-full")}>
          <ArrowRightIcon />
        </Link>
      </CardFooter>
    </Card>
  );
}
