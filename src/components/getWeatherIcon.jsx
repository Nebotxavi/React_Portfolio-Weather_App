import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSnowflake,
  faBolt,
  faCloudShowersHeavy,
  faSun,
  faCloud,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSnowflake,
  faBolt,
  faCloudShowersHeavy,
  faSun,
  faCloud,
  faCloudSun
);

export function getWeatherIcon(code) {
  const iconStyle =
    code <= 299
      ? "bolt"
      : (code >= 300 && code <= 599) || code === 900
      ? "cloud-showers-heavy"
      : code >= 600 && code <= 699
      ? "snowflake"
      : code === 800
      ? "sun"
      : code > 800 && code < 804
      ? "cloud-sun"
      : "cloud";

  return <FontAwesomeIcon icon={iconStyle} />;
}
