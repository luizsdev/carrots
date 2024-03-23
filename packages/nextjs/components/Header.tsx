"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobeAltIcon, MagnifyingGlassIcon, SunIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

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

export const Header = () => {
  return (
    <header className="navbar bg-yellow-50 h-[80px] flex-shrink-0 justify-between z-20 px-8 xl:px-20 shadow-md">
      <nav className="shrink-0 flex items-center flex-nowrap">
        <Link href="/" passHref className="lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">LittleFarm</span>
            <span className="text-xs">Cooperative tokenization</span>
          </div>
        </Link>
        <ul className="lg:flex lg:flex-nowrap  px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </nav>

      <div className="bg-yellow-100 px-4 flex rounded-lg flex-shrink w-full max-w-[510px] h-10 shadow-md mx-auto">
        <MagnifyingGlassIcon width={22} className="stroke-yellow-950 pointer-events-none mr-2" />
        <input
          className="bg-transparent rounded w-full placeholder:text-yellow-950 focus:outline-none"
          placeholder="Search"
        />
      </div>

      <div className="flex justify-end items-center gap-8 [&>svg]:shrink-0">
        <SunIcon width={30} className="stroke-yellow-950" />
        <GlobeAltIcon width={30} className="stroke-yellow-950" />
        <RainbowKitCustomConnectButton />
      </div>
    </header>
  );
};
