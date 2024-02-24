import { Hero, SeachBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Coches</h1>
          <p>Explora los coches de acuerdo a tus gustos</p>
        </div>

        <div className="home__filters">
          <SeachBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" /> */}
            <CustomFilter />
            <CustomFilter />
            {/* <CustomFilter title="fuel" /> */}
            {/* <CustomFilter title="year" /> */}
          </div>
        </div>

        {isDataEmpty ? (
          <section>
            <h2>Resultados: <span className="text-red-500">{allCars.length
            }</span></h2>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">
              Oh no! Parece que hubo un error al extraer la información
            </h2>
            <p>{allCars?.error}</p>
          </div>
        )}
      </div>
    </main>
  );
}
