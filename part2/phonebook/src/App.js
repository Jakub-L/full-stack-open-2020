import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  const addName = (event) => {
    event.preventDefault();
    if (persons.some(({ name }) => name === newPerson.name)) {
      alert(`${newPerson.name} is already in the phonebook`);
    } else {
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then(({ data }) => {
          setPersons([...persons, data]);
          setNewPerson({ name: "", number: "" });
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter textFilter={textFilter} setTextFilter={setTextFilter} />
      <h3>Add a new person</h3>
      <PersonForm
        newPerson={newPerson}
        setNewPerson={setNewPerson}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} textFilter={textFilter} />
    </div>
  );
};

export default App;
