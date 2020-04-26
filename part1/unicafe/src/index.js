import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

const Header = ({ text }) => <h1>{text}</h1>;

const Statistic = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total > 0) {
    return (
      <>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={(good - bad) / total} />
        <Statistic text="positive" value={`${(100 * good) / total}%`} />
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

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
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
