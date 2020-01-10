import http from "./httpService";

export async function getForecast(city) {
  const { data: forecastData } = await http.get(city);
  return forecastData;
}
