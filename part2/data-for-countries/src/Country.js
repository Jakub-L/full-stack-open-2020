import React from "react";

function Country({ country }) {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>

      <h2>Languages</h2>
      <ul>
        {country.languages.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <img src={country.flag} style={{ width: 200 }} />
    </div>
  );
}

export default Country;
