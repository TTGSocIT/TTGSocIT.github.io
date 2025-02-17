"use client";
import { useState } from "react";
import { redirect, RedirectType } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logoImage from "../../../public/logo-white.svg";
import discordImage from "../../../public/discord.svg";

const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Join",
    href: "/join",
  },
];

/**
 * Website Header Bar
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const param = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-foreground text-foreground shadow-md h-16">
      {/* Logo Button */}
      <div className="absolute left-4 top-0 bottom-0 flex items-center justify-center z-10">
        <Link
          className="h-8 w-8 lg:h-12 lg:w-12 cursor-pointer"
          href="/"
          passHref
        >
          <Image src={logoImage} alt="Our Logo" className="h-full w-full" />
        </Link>
      </div>

      {/* Tabs (Desktop) */}
      <div className="hidden lg:flex gap-x-5 absolute inset-0 items-center justify-center">
        {nav.map(({ name, href }) => (
          <a href={href} className="relative group" key={name}>
            <div
              className={`my-1 mx-2 font-bold text-xl ${
                param === href ? "text-white" : "text-neutral-500"
              }`}
            >
              {name}
            </div>
            <span
              className={`transition-all duration-200 w-[0%] mx-auto opacity-100 h-[2px] block bg-primary group-hover:w-full
                ${param === href ? "w-full" : ""}`}
            />
          </a>
        ))}

        <div className="bg-neutral-300 w-[1px] h-6 opacity-20" />

        <div
          className="relative flex items-center cursor-pointer"
          onClick={() =>
            redirect("https://discord.gg/unswttgsoc", RedirectType.push)
          }
        >
          <Image src={discordImage} alt="discord" className="h-4 w-auto" />
        </div>
      </div>

      {/* Mobile Hamburger Icon*/}
      <div className="lg:hidden flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="text-white ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden absolute left-0 top-16 bg-foreground w-full p-4 space-y-4`}
        >
          {nav.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-neutral-500 block font-bold"
              onClick={toggleMenu}
            >
              {name}
            </Link>
          ))}
          <div
            className="flex items-center cursor-pointer"
            onClick={() =>
              redirect("https://discord.gg/unswttgsoc", RedirectType.push)
            }
          >
            <Image src={discordImage} alt="discord" className="h-4 w-auto" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
