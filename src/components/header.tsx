"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";
import { Routes, routes } from "@/data/routes";

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
    <div className="w-full bg-[#000000] h-[70px] fixed z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="block h-[70px] ml-6 md:ml-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex ">
          <ul className="text-[#18776A]">
            {routes.map((item: Routes) => {
              return (
                <li
                  key={item.path}
                  className="inline-block px-2 font-urbanist font-semibold"
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <NavbarMobile />
      </div>
    </div>
  );
}
