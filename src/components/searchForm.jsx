import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { getCity } from "../services/cityService";
import { getForecast } from "../services/getForecast";
import Input from "./common/input/input";
import ManageClickOutside from "./common/manageClickOutside";

export function SearchForm({ setForecast, setCityName }) {
  const [query, setQuery] = useState("");
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
  }, [cityID, setCityName, setForecast]);

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

  const handleClickOutside = () => {
    setQuery("");
  };

  const submitClickedItem = ({ currentTarget: input }) => {
    const cityID = input.attributes[1].nodeValue;
    setQuery("");
    setCityID(cityID);
  };

  const handleSubmit = cityID => {
    if (cityID) {
      setQuery("");
      setCityID(cityID);
    } else if (query) {
      const { id: cityID } = getCity(query)[0] || "";
      setQuery("");
      setCityID(cityID);
    }
  };

  return (
    <ManageClickOutside onClick={handleClickOutside}>
      <Input
        query={query}
        handleChange={e => setQuery(e.target.value)}
        handleSubmit={handleSubmit}
        submitClickedItem={submitClickedItem}
        placeholder="location"
      />
    </ManageClickOutside>
  );
}
