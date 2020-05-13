import React, { useState, useEffect } from "react";
import api from "./services/persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    updateAllPeople();
  }, []);

  const updateAllPeople = () =>
    api.getPeople().then((response) => setPersons(response.data));

  const handleAddOrUpdate = (event) => {
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
      api.updatePerson(matchingPerson.id, newPerson).then(({ data }) => {
        setNewPerson({ name: "", number: "" });
        updateAllPeople();
      });
    } else {
      api.createPerson(newPerson).then(({ data }) => {
        setPersons([...persons, data]);
        setNewPerson({ name: "", number: "" });
      });
    }
  };

  const handleRemove = (name, id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      api.removePerson(id).then(() => {
        setNewPerson({ name: "", number: "" });
        updateAllPeople();
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
        handleAddOrUpdate={handleAddOrUpdate}
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
