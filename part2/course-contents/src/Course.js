import React from "react";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ parts }) => {
  return (
    <p style={{ fontWeight: "bold" }}>
      Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
    </p>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part id={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
