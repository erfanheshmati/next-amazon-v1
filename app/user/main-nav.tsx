"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

const links = [
  {
    title: "Profile",
    href: "/user/profile",
  },
  {
    title: "Orders",
    href: "/user/orders",
  },
  {
    title: "Settings",
    href: "/user/settings",
  },
];

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center sm:space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href="/" className="flex sm:hidden">
        <Image
          src="/assets/icons/logo.svg"
          width={48}
          height={48}
          alt={`${APP_NAME} logo`}
        />
      </Link>

      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname.includes(item.href) ? "" : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
