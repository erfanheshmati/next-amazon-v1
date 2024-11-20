import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainNav from "./main-nav";
import Menu from "@/components/shared/header/menu";
import MobileMenu from "./mobile-menu";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex wrapper sm:gap-10">
            <Link href="/" className="hidden sm:flex">
              <Image
                src="/assets/icons/logo.svg"
                alt={`${APP_NAME} logo`}
                width={48}
                height={48}
              />
            </Link>

            {/* Mobile navigation */}
            <div className="flex sm:hidden">
              <MobileMenu />
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex">
              <MainNav />
            </div>

            <div className="flex ml-auto items-center space-x-4">
              <Menu />
            </div>
          </div>
        </div>
        <div className="flex-1 wrapper">{children}</div>
      </div>
    </>
  );
}
