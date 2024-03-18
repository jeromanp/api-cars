import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/RoPiCars.svg"
            alt="Footer logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            RoPi Cars 2024 <br />
          </p>
        </div>
        <div className="footer__links">
          {/* {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))} */}
          <Link href={"https://github.com/jeromanp/api-cars"}>
            <CustomButton
              title="Repositiorio de Github"
              btnType="button"
              containerStyles="bg-primary-blue text-white rounded-full text-sm hover:bg-black"
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 RoPi Cars. Todos los derechos reservados</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Política de Privacidad
          </Link>
          <Link href="/" className="text-gray-500">
            Terminos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
