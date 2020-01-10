import React, { useState, useEffect } from "react";
import Card from "./components/cards";
import { getForecast } from "./services/getForecast";
import { SearchForm } from "./components/searchForm";
import Title from "./components/title";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Weather = () => {
  const [forecast, setForecast] = useState([]);
  const [cityName, setCityName] = useState("");
  const [cityID, setCityID] = useState();

  useEffect(() => {
    let shouldIgnore = false;
    async function fetchData() {
      try {
        if (cityID) {
          const forecastData = await getForecast("/" + cityID);
          const cityName = forecastData.city_name;
          const forecast = mapForecast(forecastData.data);
          if (!shouldIgnore) {
            setForecast(forecast);
            setCityName(cityName);
          }
        }
      } catch (ex) {
        if (ex.message === "forecastData is undefined")
          toast.info("Currently, there is no data for the requested location.");
      }
    }
    fetchData();
    return () => (shouldIgnore = true);
  }, [cityID]);

  function mapForecast(forecastData) {
    return forecastData.map(day => {
      return {
        max: day.max_temp,
        min: day.min_temp,
        weather: {
          description: day.weather.description,
          code: day.weather.code
        }
      };
    });
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <SearchForm submitSearch={setCityID} />
      <Title cityName={cityName} />
      <Card forecast={forecast} />
    </React.Fragment>
  );
};

export default Weather;
