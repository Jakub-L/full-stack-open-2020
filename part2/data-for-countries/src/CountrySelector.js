import React from "react";

function CountrySelector({ name, setFilter }) {
  return (
    <div>
      {name}
      <button onClick={() => setFilter(name)}>Show</button>
    </div>
  );
}

export default CountrySelector;
