import React from "react";

function PersonForm({ newName, setNewName, newNumber, setNewNumber, addName }) {
  return (
    <form onSubmit={addName}>
      <div>
        Name:
        <input
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
      </div>
      <div>
        Number:
        <input
          value={newNumber}
          onChange={({ target }) => setNewNumber(target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default PersonForm;
