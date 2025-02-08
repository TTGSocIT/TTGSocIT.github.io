"use client";
import { redirect, RedirectType } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
//import { useState } from "react";

const nav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Join",
    href: "/join",
  },
  // {
  //   name: "Contact",
  //   href: "/contact",
  // },
];

/**
 * Website Header Bar
 */
const Header = () => {
  const param = usePathname();
  //const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="fixed w-full z-50 bg-foreground text-foreground shadow-md h-16">
      {/* Logo Button */}
      <div className="absolute left-4 top-0 bottom-0 flex items-center justify-center z-10">
        <Link
          className="h-8 w-8 lg:h-12 lg:w-12 cursor-pointer"
          href="/"
          passHref
        >
          <img src="logo-blue.svg" alt="Our Logo" className="h-full w-full" />
        </Link>
      </div>

      {/* Tabs */}
      <div className="hidden lg:flex gap-x-5 absolute inset-0 items-center justify-center">
        {nav.map(({ name, href }) => (
          <a href={href} className="relative group" key={name}>
            <div
              className={`my-1 mx-2 font-bold text-lg ${
                param === href ? "text-white" : "text-neutral-500"
              }`}
            >
              {name}
            </div>
            <span
              className={`
                transition-all duration-200 w-[0%] mx-auto opacity-100 h-[2px] block bg-primary group-hover:w-full
                ${param === href ? "w-full" : ""}
              `}
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
          <img src="/discord.svg" alt="discord" className="h-4 w-auto" />
        </div>

        <div className="relative flex items-center text-white cursor-pointer">
          <div className="my-1 mx-2 font-bold text-lg text-white">Connect</div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m98 190.06 139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" />
          </svg>
        </div>
      </div>

      <div
        className="absolute inset-0 left-16 flex items-center flex-row-reverse pr-4 lg:hidden
        cursor-pointer text-white"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="transition-transform duration-150 rotate-0"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
