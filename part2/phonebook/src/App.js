import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./services/persons";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [textFilter, setTextFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    updateAllPeople();
  }, []);

  const updateAllPeople = () =>
    api.getAll().then((response) => setPersons(response.data));

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
      api.update(matchingPerson.id, newPerson).then(({ data }) => {
        setNotification(`${newPerson.name} updated!`);
        setTimeout(() => setNotification(null), 3000);
        setNewPerson({ name: "", number: "" });
        updateAllPeople();
      });
    } else {
      api.create(newPerson).then(({ data }) => {
        setPersons([...persons, data]);
        setNotification(`${newPerson.name} added!`);
        setTimeout(() => setNotification(null), 3000);
        setNewPerson({ name: "", number: "" });
      });
    }
  };

  const handleRemove = (name, id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      api.remove(id).then(() => {
        setNotification(`${name} removed!`);
        setTimeout(() => setNotification(null), 3000);
        setNewPerson({ name: "", number: "" });
        updateAllPeople();
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
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
