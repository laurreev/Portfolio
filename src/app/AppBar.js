"use client";
import { useState } from "react";
import Link from "next/link";

export default function AppBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-br from-[#232526]/90 to-[#414345]/90 backdrop-blur-md flex items-center justify-between px-4 h-14 shadow-md">
      <span className="text-lg font-bold tracking-wide text-[#FFD700]">Dlanor Domingo</span>
      <div className="relative">
        <button
          className="metal-btn px-3 py-1 text-base"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>
        {open && (
          <ul className="absolute right-0 mt-2 bg-gradient-to-br from-[#232526] to-[#414345] border border-[#FFD700] rounded-xl shadow-2xl min-w-[160px] text-base animate-fadeInMenu overflow-hidden">
            <li className="border-b border-[#FFD700]/20 last:border-b-0">
              <Link href="/" className="block px-5 py-3 transition-all duration-200 hover:bg-[#FFD700] hover:text-[#232526] font-semibold text-[#FFD700]" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li className="border-b border-[#FFD700]/20 last:border-b-0">
              <Link href="/about" className="block px-5 py-3 transition-all duration-200 hover:bg-[#FFD700] hover:text-[#232526] font-semibold text-[#FFD700]" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li className="border-b border-[#FFD700]/20 last:border-b-0">
              <Link href="/projects" className="block px-5 py-3 transition-all duration-200 hover:bg-[#FFD700] hover:text-[#232526] font-semibold text-[#FFD700]" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="border-b border-[#FFD700]/20 last:border-b-0">
              <Link href="/skills" className="block px-5 py-3 transition-all duration-200 hover:bg-[#FFD700] hover:text-[#232526] font-semibold text-[#FFD700]" onClick={() => setOpen(false)}>
                Skills
              </Link>
            </li>
            <li className="border-b border-[#FFD700]/20 last:border-b-0">
              <Link href="/blog" className="block px-5 py-3 transition-all duration-200 hover:bg-[#FFD700] hover:text-[#232526] font-semibold text-[#FFD700]" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-5 py-3 transition-all duration-200 hover:bg-[#FFD700] hover:text-[#232526] font-semibold text-[#FFD700]" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
