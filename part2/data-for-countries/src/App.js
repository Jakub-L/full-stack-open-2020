import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Country from "./Country";
import CountrySelector from "./CountrySelector";
import Weather from "./Weather";

function App() {
  const weatherKey = process.env.REACT_APP_API_KEY;
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {
      setCountries(data);
      setFilteredCountries(data);
    });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    );
    setWeather({});
  }, [filter]);

  useEffect(() => {
    if (filteredCountries.length === 1) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${filteredCountries[0].capital}`
        )
        .then(({ data }) => setWeather(data));
    }
  }, [filteredCountries]);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {filteredCountries.length >= 10 ? (
        <p>Too many matches, use a more specific filter</p>
      ) : filteredCountries.length === 1 ? (
        <>
          <Country country={filteredCountries[0]} />
          <Weather weather={weather} />
        </>
      ) : (
        filteredCountries.map(({ name }) => (
          <CountrySelector key={name} name={name} setFilter={setFilter} />
        ))
      )}
    </div>
  );
}

export default App;
