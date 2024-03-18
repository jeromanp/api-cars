"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "@/components";
import { handleScroll } from "@/utils";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/RoPiCars.svg"
            alt="RoPi Cars Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Explorar coches"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </nav>
    </header>
  );
};

export default Navbar;
