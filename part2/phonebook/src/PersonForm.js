import React from "react";

function PersonForm({ newPerson, setNewPerson, handleAddOrUpdate }) {
  return (
    <form onSubmit={handleAddOrUpdate}>
      <div>
        Name:
        <input
          value={newPerson.name}
          onChange={({ target }) =>
            setNewPerson({ ...newPerson, name: target.value })
          }
        />
      </div>
      <div>
        Number:
        <input
          value={newPerson.number}
          onChange={({ target }) =>
            setNewPerson({ ...newPerson, number: target.value })
          }
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default PersonForm;
