import React from "react";

function Persons({ persons, textFilter }) {
  return (
    <div>
      {persons
        .filter(({ name }) =>
          name.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map(({ name, number }) => (
          <p key={name}>
            {name} {number}
          </p>
        ))}
    </div>
  );
}

export default Persons;
