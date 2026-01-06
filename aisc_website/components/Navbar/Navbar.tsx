"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-transparent px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white font-semibold tracking-wide text-[18px] w-full font-[var(--font-bai-jamjuree)]">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1">
            <div className="w-8 h-1 bg-white" />
            <div className="w-8 h-1 bg-white" />
            <div className="w-8 h-1 bg-white" />
          </div>
        </button>

        {/* Logo or Title */}
        <span className="md:hidden text-lg font-bold">AISC @ UCSD</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full">
          <Link href="/" className="relative w-16 h-16 group mr-8">
            {pathname === "/" ? (
              <Image
                src="/colored_logo.png"
                alt="AISC Logo"
                width={64}
                height={64}
              />
            ) : (
              <>
                <Image
                  src="/transparent_logo.png"
                  alt="AISC Logo"
                  width={64}
                  height={64}
                  className="absolute transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/colored_logo.png"
                  alt="AISC Logo Lit"
                  width={64}
                  height={64}
                  className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </>
            )}
          </Link>

          <ul className="flex space-x-8">
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-purple-400" : ""
                } hover:text-purple-400 transition-colors duration-200`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/initiatives"
                className={`${
                  pathname === "/initiatives" ? "text-purple-400" : ""
                } hover:text-purple-400 transition-colors duration-200`}
              >
                INITIATIVES
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className={`${
                  pathname === "/events" ? "text-purple-400" : ""
                } hover:text-purple-400 transition-colors duration-200`}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <a
                href="https://humansforai.com/aisc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                HFAI
              </a>
            </li>
          </ul>

          <div className="flex-1" />

          <ul>
            <li>
              <a
                href="https://linktr.ee/aiscucsd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                GET INVOLVED
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-black to-gray-400 z-50 flex flex-col space-y-8 p-8 text-white text-2xl font-bold font-[var(--font-bai-jamjuree)]">
          <button
            className="self-start"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="space-y-1">
              <div className="w-8 h-1 bg-white" />
              <div className="w-8 h-1 bg-white" />
              <div className="w-8 h-1 bg-white" />
            </div>
          </button>
          <Link
            href="/"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
          >
            ABOUT
          </Link>
          <Link
            href="/initiatives"
            className={`${
              pathname === "/initiatives" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
          >
            INITIATIVES
          </Link>
          <Link
            href="/events"
            className={`${
              pathname === "/events" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
          >
            EVENTS
          </Link>
          <a
            href="https://humansforai.com/aisc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            HFAI
          </a>
          <Link
            href="/get-involved"
            className={`${
              pathname === "/get-involved" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
          >
            GET INVOLVED
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
