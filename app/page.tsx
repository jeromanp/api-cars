import { Hero, SeachBar, CustomFilter } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Coches</h1>
          <p>Explora los coches de acuerdo a tus gustos</p>
        </div>

        <div className="home__filters">
          <SeachBar/>
          <div className="home__filter-container">{/* <CustomFilter title="fuel" /> */}
          <CustomFilter/>
          <CustomFilter/>
          {/* <CustomFilter title="fuel" /> */}
          {/* <CustomFilter title="year" /> */}          
          </div>
        </div>
      </div>
    </main>
  );
}
