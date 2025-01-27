"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
    <div className="w-full bg-[#000000] h-[70px] fixed z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="block h-[70px]">
          <Logo />
        </Link>

        <nav>
          <ul className="text-[#18776A]">
            <li
              className={`inline-block px-2 font-urbanist font-semibold ${
                pathname?.includes("#") == false
                  ? "border-b-2 border-transparent"
                  : ""
              }`}
            >
              <Link href="/">Kreu</Link>
            </li>
            <li
              className={`inline-block px-2 font-urbanist font-semibold ${
                pathname?.includes("/#about")
                  ? "border-b-2 border-[#18776a]"
                  : ""
              }`}
            >
              <Link href="#about">Rreth nesh</Link>
            </li>
            <li
              className={`inline-block px-2 font-urbanist font-semibold ${
                pathname?.includes("/#projects")
                  ? "border-b border-[#18776a]"
                  : ""
              }`}
            >
              <Link href="#projects">Projekte</Link>
            </li>
            <li
              className={`inline-block px-2 font-urbanist font-semibold ${
                pathname?.includes("/#contact")
                  ? "border-b-2 border-[#18776a]"
                  : ""
              }`}
            >
              <Link href="#contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
