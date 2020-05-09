import React from "react";

function Filter({ textFilter, setTextFilter }) {
  return (
    <>
      Filter names by:
      <input
        value={textFilter}
        onChange={({ target }) => setTextFilter(target.value)}
      />
    </>
  );
}

export default Filter;
