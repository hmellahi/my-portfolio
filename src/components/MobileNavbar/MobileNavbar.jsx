"use client";

import { cn } from "@/helpers/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../Button";
import MenuToggle from "../MenuToggle/MenuToggle";
import SocialLinks from "./SocialLinks";

export default function MobileNavbar({ navRoutes }) {
  const [isOpen, setIsOpen] = useState(!false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isCurrentRoute = (routeLink) => routeLink === pathname;

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", closeNavbar);
    window.addEventListener("scroll", closeNavbar);

    return () => {
      window.removeEventListener("resize", closeNavbar);
      window.removeEventListener("scroll", closeNavbar);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="p-2 bg-primary-500 rounded-xl focus:outline-none block md:hidden shadow-inner ml-auto z-50"
      >
        <MenuToggle open={isOpen} />
      </button>
      {
        <div className="block md:hidden">
          <nav
            className={cn([
              "z-[40] fixed top-0 right-0 w-full h-full bg-white py-20 transform flex justify-center transition-transform duration-700 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full",
            ])}
          >
            <ul className="space-y-4 text-3xl font-bold text-[#1a1a1a] flex justify-center items-center flex-col gap-4">
              {navRoutes.map((route) => (
                <li
                  key={route.key}
                  onClick={toggleNavbar}
                  className={cn([
                    "border-b-4 pb-1 border-transparent hover:border-b-primary-500 duration-300",
                    isCurrentRoute(route.href) && "border-b-primary-500",
                  ])}
                >
                  <Button
                    link={route.href}
                    isExternal={!!route.isExternal}
                    label={route.label}
                    unstyled={true}
                  />
                </li>
              ))}
            </ul>
            <SocialLinks />
          </nav>
        </div>
      }
    </>
  );
}