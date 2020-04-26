import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({ header, anecdote, votes }) => {
  return (
    <>
      <h1>{header}</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  );
};

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [bestIndex, setBest] = useState(0);

  const randomAnecdote = (anecdotes) => {
    const randomInt = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomInt);
  };

  const increaseVote = (selected) => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setBest(newVotes.indexOf(Math.max(...newVotes)));
  };

  return (
    <div>
      <Anecdote
        header="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button handleClick={() => increaseVote(selected)} label="vote" />
      <Button
        handleClick={() => randomAnecdote(anecdotes)}
        label="next anecdote"
      />
      <Anecdote
        header="Anecdote with most votes"
        anecdote={anecdotes[bestIndex]}
        votes={votes[bestIndex]}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
