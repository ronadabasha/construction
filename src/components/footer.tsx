import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3D4047] border-t border-[#888889] py-4 px-6 text-white">
      <p className="text-center text-xs text-[#888889] font-urbanist font-medium">
        Copyright {new Date().getFullYear()} Construction. All rights reserved.
      </p>
    </footer>
  );
}
