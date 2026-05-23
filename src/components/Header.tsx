"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/wanted";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-50 bg-white">
      {/* Top bar */}
      <div className="bg-gray-light border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity">
              <img src="https://crimestoppers-uk.org/getContentAsset/94f688ef-3a6d-4dbb-823b-e003ce8d5e57/0d97e4a9-e9ea-4e9e-bc2b-b08a6eae8854/switcher-CS-2x.png" alt="Crimestoppers" className="h-5 w-auto" />
              Crimestoppers
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm cursor-pointer hover:text-purple-dark transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
              </svg>
              English
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-[1400px] mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="cursor-pointer block">
            <img
              src="https://crimestoppers-uk.org/getContentAsset/a3fd999c-1a7a-45a3-acbc-a3a932ebe35b/0d97e4a9-e9ea-4e9e-bc2b-b08a6eae8854/crimestoppers-logo.svg"
              alt="CrimeStoppers"
              className="h-16 sm:h-20 md:h-28 w-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="text-right mr-2">
            <Link href="#" className="text-sm text-purple-dark font-semibold hover:underline cursor-pointer flex items-center gap-1 justify-end">
              Keep in Contact Login
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </Link>
          </div>
          <Link
            href="/get-involved"
            className="bg-purple-dark text-white px-8 py-3 rounded-lg font-semibold text-base cursor-pointer hover:bg-purple-light transition-colors"
          >
            Donate
          </Link>
          <Link
            href="/give-information/most-wanted"
            className="bg-red-brand text-white px-8 py-3 rounded-lg font-semibold text-base cursor-pointer hover:bg-red-hover transition-colors"
          >
            Give information
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200">
        <div className={`max-w-[1400px] mx-auto px-4 ${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-0">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.label} className="flex-1">
                  <Link
                    href={item.href}
                    className={`nav-link block text-center py-3 md:py-4 border-b-2 cursor-pointer text-sm md:text-base ${
                      isActive
                        ? "text-purple-dark border-purple-dark"
                        : "border-transparent text-foreground hover:text-purple-dark"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {menuOpen && (
            <div className="flex flex-col gap-2 py-4 md:hidden border-t border-gray-200">
              <Link
                href="/get-involved"
                className="bg-purple-dark text-white px-6 py-3 rounded-lg font-semibold text-center cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="/give-information/most-wanted"
                className="bg-red-brand text-white px-6 py-3 rounded-lg font-semibold text-center cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Give information
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
