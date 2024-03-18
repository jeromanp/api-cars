import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Renta, Venta de Coches",
  description:
    "Sitio para visualizar vehículos y clasificarlos en torno a sus características",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>       
        <link rel="icon" href="/RoPiCars.PNG" sizes="any" />
      </Head>
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
