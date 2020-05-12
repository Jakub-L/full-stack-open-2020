import React from "react";

function Persons({ persons, textFilter, handleRemove }) {
  return (
    <div>
      {persons
        .filter(({ name }) =>
          name.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map(({ id, name, number }) => (
          <div key={name}>
            {name} {number}
            <button onClick={() => handleRemove(name, id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default Persons;
