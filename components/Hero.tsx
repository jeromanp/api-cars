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
        <h1 className="hero__title text-center  ">
          <b className="text-primary-blue">Buscador</b><br/> de<br/> <b className="text-primary-blue">vehículos</b>.
        </h1>
        <p className="hero__subtitle text-justify">
          Este proyecto se encamina a visualizar resultador extraidos de API-Ninjas en su versión de coches. Podemos filtrar vehículos por marca, modelo o tipo de combustible.
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
