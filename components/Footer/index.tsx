import Image from "next/image";
import { Wrapper } from "../ui";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { routes } from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-foreground">
      <Wrapper className="p-20 grid grid-cols-1 lg:grid-cols-3 gap-10 text-secondary justify-between">
        <div className="flex flex-col h-full justify-center">
          <div className="flex-1">
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="Logotype in footer"
              className="grayscale opacity-70 mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-row gap-5 justify-center text-3xl">
            <Link
              href="https://www.facebook.com/people/Time-Machines-Warsaw/100063740756138/"
              className="block hover:text-slate-900"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/timemachines_pl/"
              className="block hover:text-slate-900"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="text-secondary flex flex-col gap-5 justify-between">
          <h3 className="text-3xl">O stronie:</h3>
          <ul className="flex flex-col gap-4">
            {routes.map((route, i) => (
              <Link key={i} href={route.href}>
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-secondary flex flex-col gap-5">
          <h3 className="text-3xl">Partnerzy:</h3>
          <div className="flex flex-col lg:flex-row gap-10">
            <Image
              src="/APM.png"
              width={125}
              height={125}
              alt="Logotype in footer"
              className="backdrop-filter backdrop-brightness-0 bg-white opacity-70"
            />
            <Image
              src="/KD.jpg"
              width={125}
              height={125}
              alt="Logotype in footer"
              className="backdrop-filter backdrop-brightness-0 bg-white opacity-70"
            />
          </div>
        </div>
      </Wrapper>
      ;
    </footer>
  );
}
