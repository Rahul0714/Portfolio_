import React, { useState, useEffect } from "react";
import WEATHER_URL from "../utils/constants";
import useWeatherData from "../utils/useWeatherData";

const MobileWeather = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const weatherData = useWeatherData();
  console.log(weatherData);

  return (
    <div className="flex flex-col my-14 items-center justify-center font-bold text-4xl text-gray-100">
      <div className="flex">
        <div>{`${new Date().toLocaleTimeString().split(":")[0]} `}</div>
        <div className="font-normal">&nbsp;:&nbsp; </div>
        <div className="font-light">{new Date().getMinutes()}</div>
        <div className="font-extralight">
          {new Date().getHours() > 12 ? "PM" : "AM"}
        </div>
      </div>
      <div className="flex text-base font-normal">
        <div className="">{`${days[new Date().getDay()]}, `} &nbsp;</div>
        <div>
          {new Date().getDate()}{" "}
          {new Date().toLocaleString("default", { month: "short" })}
        </div>
        <div></div>
      </div>
      <div className="flex text-base font-normal items-center gap-2">
        <div>{weatherData?.current?.condition?.text}</div>
        <img
          className="text-xs w-10"
          src={weatherData?.current?.condition?.icon}
          alt="currentWeather"
        />
        <div>
          {weatherData?.current?.feelslike_c}
          {"\u00B0"} C
        </div>
      </div>
    </div>
  );
};

export default MobileWeather;
