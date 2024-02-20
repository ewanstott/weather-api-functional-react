//Questions
//useRef for previous search term not working

import React, { useEffect, useState, useRef } from "react";
// import Interface from "./Components/Interface";
import axios from "axios";
import Conditions from "./Components/Conditions";
import Header from "./Components/Header";
import Location from "./Components/Location";
import Search from "./Components/Search";
import Temp from "./Components/Temp";

//Hooks to use
//useRef
//callback
// - useContext ?? - lets you define a "context" whoch holds some state
//   - you define a <contextProvider>{ children }<contextProvider>
//   - in the child components you can access the state in the conext

const App = () => {
  //Hook 1. useState Hooks:
  const [search, setSearch] = useState("Vancouver"); //search is the state variable, and setSearch is the function to update that state variable.
  const [weather, setWeather] = useState({});
  //Hook 3. useRef - persists between renders of component, but does NOT cause component to re-update when changed (like useState does).
  const renderCount = useRef(1); //similar to state, but does not cause re-renders
  const inputRef = useRef(); // like using document.getElementById().
  const prevSearch = useRef(""); // Ref to store previous search term

  const getWeatherData = async () => {
    //search
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=adef24c0d24a95065818997a98ddd457`
    );
    console.log(data);
    // console.log(data.main.temp);
    setWeather(data); //to store weather data in the state ^^
  };

  //Hook 2. useEffect Hook
  useEffect(() => {
    getWeatherData();
    renderCount.current = renderCount.current + 1;
  }, []); //listening for search to update before repulling getWeatherData() function
  //[] means run once & [search] means it re-runs when a new search
  //ASK ABOUT THIS^^

  useEffect(() => {
    prevSearch.current = weather.name; // Update prevSearch when weather name changes
  }, [weather.name]); //why only updating on second click??

  const onInput = (e) => {
    //calling setSearch(newValue), updates the value of the search state variable to newValue.
    setSearch(e.target.value); //as user types, search passed up to search
    console.log(e.target.value);
  };

  const onSearchClick = () => {
    console.log("search pressed");
    getWeatherData(search);
    console.log(search);
  };

  const focus = () => {
    // console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <>
      <Header />
      {/* Search box */}
      <Search
        inputRef={inputRef}
        onInput={onInput}
        onSearchClick={onSearchClick}
        focus={focus}
      />
      {/* Location */}
      <Location name={weather.name} />
      {/* Temp */}
      {/* && used to return true if both expressions are true, and false
      otherwise.
      If weather has a property named main and main has a property named temp,
      the <Temp> component will be rendered with the temp prop set to the value of weather.main.temp. */}
      {weather.main && weather.main.temp && <Temp temp={weather.main.temp} />}
      {/* Conditions */}
      {weather.weather && weather.weather[0] && (
        <Conditions conditions={weather.weather[0].description} />
      )}
      <div>App rendered {renderCount.current} times</div>
      <div>Previous Search: {prevSearch.current}</div>
    </>
  );
};

export default App;
