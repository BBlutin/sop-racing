"use client";

import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <aside className="max-w-[16vw] bg-transparent z-990 fixed top-0 inset-y-0 my-4 ml-4 block w-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased shadow-none left-0">
      <div className="h-[30px] mb-4">
        <h1 className="text-2xl font-bold text-center">TEC Racing</h1>
      </div>
      <hr className="h-[2px] mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      <div className="items-center block w-auto max-h-screen mt-4 overflow-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="w-full mt-2">
            <Link
              href="/"
              className={pathname === "/" ? `activeLink` : `baseLink`}
            >
              <div className={pathname === "/" ? `activeTitle` : `baseTitle`}>
                <HomeIcon
                  className={pathname === "/" ? `activeIcon` : `baseIcon`}
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Accueil
              </span>
            </Link>
          </li>
          <li className="w-full mt-2">
            <Link
              href="/market"
              className={pathname === "/market" ? `activeLink` : `baseLink`}
            >
              <div
                className={pathname === "/market" ? `activeTitle` : `baseTitle`}
              >
                <BuildingStorefrontIcon
                  className={pathname === "/market" ? `activeIcon` : `baseIcon`}
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Marketplace
              </span>
            </Link>
          </li>
          <li className="w-full mt-2">
            <Link
              href="/car"
              className={pathname === "/car" ? `activeLink` : `baseLink`}
            >
              <div
                className={pathname === "/car" ? `activeTitle` : `baseTitle`}
              >
                <RocketLaunchIcon
                  className={pathname === "/car" ? `activeIcon` : `baseIcon`}
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Voiture
              </span>
            </Link>
          </li>
          <li className="w-full mt-2">
            <Link
              href="/inventory"
              className={pathname === "/inventory" ? `activeLink` : `baseLink`}
            >
              <div
                className={
                  pathname === "/inventory" ? `activeTitle` : `baseTitle`
                }
              >
                <ArchiveBoxIcon
                  className={
                    pathname === "/inventory" ? `activeIcon` : `baseIcon`
                  }
                />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Inventaire
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default NavBar;
