import React from "react";
import { getWeekday } from "./utils/getWeekday";
import { getWeatherIcon } from "./getWeatherIcon";

const Card = ({ forecast }) => {
  return (
    <div className="card-container">
      {forecast.map((day, ind) => {
        return (
          <div className="card" key={ind}>
            <div className="card-body">
              <h5 className="card-title">{getWeekday(ind)}</h5>
              <p className="card-text">{day.weather.description}</p>
              {getWeatherIcon(day.weather.code)}
              <p className="card-text">
                max: {day.max}° | min: {day.min}°
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
