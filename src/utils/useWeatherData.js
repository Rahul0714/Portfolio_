import React, { useEffect, useState } from "react";
import { WEATHER_URL } from "./constants";
const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.WEATHER_API_KEY,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(WEATHER_URL, options);
      const result = await response.json();
      setWeatherData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return weatherData;
};

export default useWeatherData;
