import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Header text="statistics" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
