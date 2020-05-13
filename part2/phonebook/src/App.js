import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response.data));
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    const [matchingPerson] = persons.filter(
      ({ name }) => name === newPerson.name
    );
    if (
      matchingPerson &&
      window.confirm(
        `${newPerson.name} is already in the phonebook. Update the number?`
      )
    ) {
      personService.update(matchingPerson.id, newPerson).then(({ data }) => {
        setNewPerson({ name: "", number: "" });
        personService.getAll().then((response) => setPersons(response.data));
      });
    } else {
      personService.create(newPerson).then(({ data }) => {
        setPersons([...persons, data]);
        setNewPerson({ name: "", number: "" });
      });
    }
  };

  const handleRemove = (name, id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService.remove(id).then(() => {
        setNewPerson({ name: "", number: "" });
        personService.getAll().then((response) => setPersons(response.data));
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
        handleAdd={handleAdd}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        textFilter={textFilter}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default App;
