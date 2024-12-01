import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const Logo = () => (
    <Image
      className="absolute -mt-[22px] -ml-10"
      src="/logo.svg"
      width={140}
      height={120}
      alt="Fuchs & Eule"
    />
  );
  return (
    <div className="w-full bg-[#000000] h-[70px]">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="block h-[70px]">
          <Logo />
        </Link>

        <nav>
          <ul className="text-white">
            <li className="inline-block px-2">
              <Link href="/">Kreu</Link>
            </li>
            <li className="inline-block px-2">
              <Link href="#about">Rreth nesh</Link>
            </li>
            <li className="inline-block px-2">
              <Link href="#projects">Projekte</Link>
            </li>
            <li className="inline-block px-2">
              <Link href="#contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
