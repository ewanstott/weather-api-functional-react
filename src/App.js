import React, { useEffect, useState } from "react";
import Interface from "./Components/Interface";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState();

  const getWeatherData = async () => {
    const { data } = await axios.get(
      // `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=adef24c0d24a95065818997a98ddd457`
      `https://api.openweathermap.org/data/2.5/weather?lat=2.22&lon=2.22&appid=adef24c0d24a95065818997a98ddd457`
    );
    console.log(data);
    setWeather(data); //to store weather data in the state ^^
  };

  // `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=adef24c0d24a95065818997a98ddd457`;

  useEffect(() => {
    getWeatherData();
  }, [search]);
  //[] meas run once & [search] means it re-runs when a new search

  return (
    <>
      <Interface />
    </>
  );
};

export default App;
