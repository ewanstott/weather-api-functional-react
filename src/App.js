import React, { useEffect, useState } from "react";
// import Interface from "./Components/Interface";
import axios from "axios";
import Conditions from "./Components/Conditions";
import Header from "./Components/Header";
import Location from "./Components/Location";
import Search from "./Components/Search";
import Temp from "./Components/Temp";

const App = () => {
  const [search, setSearch] = useState("Vancouver"); //search is the state variable, and setSearch is the function to update that state variable.
  const [weather, setWeather] = useState("");

  const getWeatherData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=adef24c0d24a95065818997a98ddd457`
    );
    console.log(data);
    console.log(search);
    setWeather(data); //to store weather data in the state ^^
  };

  // `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=adef24c0d24a95065818997a98ddd457`;

  useEffect(() => {
    search && getWeatherData();
  }, []); //listening for search to update before repulling getWeatherData() function
  //[] means run once & [search] means it re-runs when a new search

  const onInput = (e) => {
    //calling setSearch(newValue), updates the value of the search state variable to newValue.
    setSearch(e.target.value); //as user types, search passed up to search
    console.log(e.target.value);
  };

  const onSearchClick = () => {
    console.log("search pressed");
    console.log(search);
    getWeatherData();
  };

  return (
    <>
      <Header />

      {/* Search box */}
      <Search onInput={onInput} onSearchClick={onSearchClick} />

      {/* Location */}
      <Location />
      {/* Temp */}
      <Temp />

      {/* Conditions */}
      <Conditions />
    </>
  );
};

export default App;
