import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Header = ({ text }) => <h1>{text}</h1>;

const Statistics = ({ good, neutral, bad }) => (
  <>
    <Header text="statistics" />
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
  </>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} label="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button handleClick={() => setBad(bad + 1)} label="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
