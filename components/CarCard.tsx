"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from "@/components";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  /*
 city_mpg:23
class:"compact car"
combination_mpg:24
cylinders:4
displacement:1.6
drive:"fwd"
fuel_type:"gas"
highway_mpg:26
make:"toyota"
model:"corolla"
transmission:"a"
year:1993
  */

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-titke">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      
    </div>
  );
};

export default CarCard;
