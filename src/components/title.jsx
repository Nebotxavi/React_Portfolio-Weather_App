import React from "react";

const Title = ({ cityName }) => {
  const title = cityName
    ? `Forecast for ${cityName}:`
    : "Search for a city or town.";

  return <h3>{title}</h3>;
};

export default Title;
