import React from "react";

function Filter({ filter, setFilter }) {
  return (
    <>
      Find countries:
      <input
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </>
  );
}

export default Filter;
