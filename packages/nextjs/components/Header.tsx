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
      {menuLinks.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              data-active={isActive}
              className="text-lg data-[active=true]:underline text-yellow-950 hover:underline underline-offset-4 rounded-full font-semibold"
            >
              {label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export const Header = () => {
  return (
    <header className="navbar bg-yellow-50 h-[80px] flex-shrink-0 justify-between z-20 px-8 2xl:px-20 shadow-md">
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
        <ul className="flex flex-nowrap gap-8 2xl:gap-16 mr-4">
          <HeaderMenuLinks />
        </ul>
      </nav>

      <div className="bg-yellow-100 px-4 flex rounded-lg flex-shrink w-full max-w-[410px] h-10 mx-auto">
        <MagnifyingGlassIcon width={22} className="stroke-yellow-950 pointer-events-none mr-2" />
        <input
          className="bg-transparent rounded w-full placeholder:text-yellow-950 focus:outline-none"
          placeholder="Search"
        />
      </div>

      <div className="flex justify-end items-center [&>svg]:shrink-0">
        <SunIcon width={30} className="stroke-yellow-950 mr-8" />
        <GlobeAltIcon width={30} className="stroke-yellow-950 mr-8" />
        <RainbowKitCustomConnectButton />
      </div>
    </header>
  );
};
