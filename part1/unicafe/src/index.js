import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Header = ({ text }) => <h1>{text}</h1>;

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} label="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} label="neutral" />
      <Button handleClick={() => setBad(bad + 1)} label="bad" />
      <Header text="statistics" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
