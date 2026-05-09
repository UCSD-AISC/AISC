"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  color?: "default" | "white" | "black";
}

const colors = {
  default: {
    textColor: "text-gray-800 dark:text-white",
    bgColor: "bg-gray-800 dark:bg-white",
  },
  white: {
    textColor: "text-white",
    bgColor: "bg-white",
  },
  black: {
    textColor: "text-gray-800",
    bgColor: "bg-gray-800",
  },
} as const;

const Navbar: React.FC<NavbarProps> = ({color = "default"}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastFadingOut, setIsToastFadingOut] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    const showToast = (message: string) => {
      setToastMessage(message);
      setIsToastFadingOut(false);
      setTimeout(() => setIsToastFadingOut(true), 2500);
      setTimeout(() => setToastMessage(null), 3000);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === 'SIGNED_IN') {
        showToast("SUCCESSFULLY LOGGED IN");
      } else if (event === 'SIGNED_OUT') {
        showToast("SUCCESSFULLY LOGGED OUT");
      }
    });

    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const { textColor, bgColor } = colors[color];

  return (
    <nav className="bg-transparent px-8 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white font-semibold tracking-wide text-[18px] w-full font-[var(--font-bai-jamjuree)]">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1">
            <div className={`w-8 h-1 ${bgColor}`} />
            <div className={`w-8 h-1 ${bgColor}`} />
            <div className={`w-8 h-1 ${bgColor}`} />
          </div>
        </button>

        {/* Logo or Title */}
        <span className={`md:hidden text-lg font-bold ${textColor}`}>AISC @ UCSD</span>

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
                  className={`absolute transition-opacity duration-300 group-hover:opacity-0 ${(color === "default" || color === "black") && "filter-[invert(var(--invert-perc))]"} dark:filter-none`}
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

          <ul className={`${textColor} flex space-x-8`}>
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-purple-500 dark:text-purple-400" : ""
                } hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/members"
                className={`${
                  pathname === "/members" ? "text-purple-500 dark:text-purple-400" : ""
                } hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200`}
              >
                MEMBERS
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${
                  pathname === "/projects" ? "text-purple-500 dark:text-purple-400" : ""
                } hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className={`${
                  pathname === "/events" ? "text-purple-500 dark:text-purple-400" : ""
                } hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200`}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <a
                href="https://www.aicollective.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
              >
                AIC
              </a>
            </li>
          </ul>

          <div className="flex-1" />

          <ul className={`${textColor} flex space-x-8 items-center`}>
            <li>
              <a
                href="https://linktr.ee/aiscsandiego"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
              >
                GET INVOLVED
              </a>
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200 uppercase"
                >
                  LOGOUT
                </button>
              ) : (
                <Link
                  href="/login"
                  className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  LOGIN
                </Link>
              )}
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
            className={`${
              pathname === "/" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
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
            href="/projects"
            className={`${
              pathname === "/projects" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
          >
            PROJECTS
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
            href="https://www.aicollective.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            AIC
          </a>
          <Link
            href="https://linktr.ee/aiscsandiego"
            className={`${
              pathname === "/get-involved" ? "text-purple-400" : ""
            } hover:text-purple-400 transition-colors duration-200`}
          >
            GET INVOLVED
          </Link>
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="text-left hover:text-purple-400 transition-colors duration-200 uppercase"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-purple-400 transition-colors duration-200 uppercase"
            >
              LOGIN
            </Link>
          )}
        </div>
      )}

      {/* Auth Toast */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100]">
          <div key={isToastFadingOut ? 'fading-out' : 'fading-in'} className={`bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl px-6 py-3 rounded-full flex items-center gap-3 ${isToastFadingOut ? 'animate-fade-out-up' : 'animate-fade-in-soft'}`}>
            <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${toastMessage.includes("IN") ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" : "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"}`} />
            <span className="text-white text-sm font-semibold tracking-wide font-[var(--font-bai-jamjuree)] uppercase">
              {toastMessage}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
