import React from 'react';
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import {UserButton, SignedIn} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="yoom logo"
          width={32}
          height={32}
          className="max-sm:size-10"
          />
        <p className="text-[26px] font-semibold text-white max-sm:hidden">
          YOOM
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in"/>
        </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar