import React, { useState } from "react";
import Card from "./components/cards";
import { SearchForm } from "./components/searchForm";
import Title from "./components/title";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Weather = () => {
  const [forecast, setForecast] = useState([]);
  const [cityName, setCityName] = useState("");

  return (
    <React.Fragment>
      <ToastContainer />
      <SearchForm setForecast={setForecast} setCityName={setCityName} />
      <Title cityName={cityName} />
      <Card forecast={forecast} />
    </React.Fragment>
  );
};

export default Weather;
