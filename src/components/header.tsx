"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";
import { Routes, routes } from "@/data/routes";

export default function Header() {
  const Logo = () => (
    <Image
      className="absolute mt-3"
      src="/logo.png"
      width={50}
      height={50}
      alt="construction"
    />
  );
  return (
    <div className="w-full bg-[#000000] h-[70px] z-30 relative">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="block h-[70px] ml-6 md:ml-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex ">
          <ul className="text-white">
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
