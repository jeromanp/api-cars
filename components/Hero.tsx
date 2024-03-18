"use client";

import Image from "next/image";
import React from "react";
import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Busca, encuentra y renta cualquier vehículo
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          minus dolores voluptas necessitatibus ullam, ratione.
        </p>

        <CustomButton
          title="Explorar Coches"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
