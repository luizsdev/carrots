"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Marketplace",
    href: "/",
  },
  {
    label: "About",
    href: "",
  },
  {
    label: "FAQ",
    href: "",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "underline" : ""
              } hover:underline underline-offset-4 py-1.5 px-3 text-sm rounded-full font-semibold gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-yellow-50 h-[80px] flex-shrink-0 justify-between z-20 px-0 sm:px-2 shadow-md">
      <div className="w-auto lg:w-1/2">
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">LittleFarm</span>
            <span className="text-xs">Cooperative tokenization</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap  px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="bg-yellow-100 px-4 rounded-lg w-[510px] h-10 shadow-md">
        <MagnifyingGlassIcon width={22} className="stroke-yellow-950 pointer-events-none mr-2" />
        <input className="bg-transparent rounded placeholder:text-yellow-950 focus:outline-none" placeholder="Search" />
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
