"use client";

import { cn } from "@/helpers/cn";
import { sleep } from "@/helpers/sleep";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TransitionLink({ href, children, isExternal }) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href;
  const extraProps = [];

  if (isExternal) {
    extraProps["target"] = "_blank";
  }

  const handleOnClick = async (e) => {
    e.preventDefault();

    // check if same page...
    if (pathname === href) {
      return;
    }

    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500);

    router.push(href);
    body?.classList.remove("page-transition");
    await sleep(500);
  };

  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-semibold md:text-lg  text-primary-500 shadow-sm",
        isActive && "bg-white",
        pathname === "/" && "bg-white border-transparent"
      )}
      prefetch={true}
      onClick={!isExternal && handleOnClick}
      {...extraProps}
    >
      {children}
    </Link>
  );
}
