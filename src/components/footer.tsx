import React from "react";
//import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3D4047] border-t border-[#888889] py-4 px-6 text-white">
      {/* <div className="flex justify-between max-w-6xl mx-auto">
        <button className="bg-[#2E496D] px-4 py-2 rounded">Contact us</button>
        <Link href="/">Basha Construction</Link>
      </div> */}
      <p className="text-center text-xs text-[#888889] font-urbanist font-medium">
        Copyright {new Date().getFullYear()} Basha Coonstruction. Të gjithë të
        drejtat të rezervuara.
      </p>
    </footer>
  );
}
