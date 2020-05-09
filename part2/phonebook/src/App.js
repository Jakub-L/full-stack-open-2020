import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [textFilter, setTextFilter] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.some(({ name }) => name === newName)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:
      <input
        value={textFilter}
        onChange={({ target }) => setTextFilter(target.value)}
      />
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={({ target }) => setNewNumber(target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
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
};

export default App;
