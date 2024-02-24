export async function fetchCars() {
  try {
    let headers: HeadersInit = {
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    if (process.env.NEXT_PUBLIC_API_RAPID_KEY) {
      headers["X-RapidAPI-Key"] = process.env.NEXT_PUBLIC_API_RAPID_KEY;
    }

    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      { headers: headers }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
