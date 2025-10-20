import React, { Component, useState } from "react";
import "../styles/App.css";

const Dream = ({name,description, Tag})=>{
  return <Tag>
    <p className="project-name" data-ns-test>{name}</p>
    <div className="project-description" data-ns-test>{description}</div>
  </Tag>
}
const App = () => {
  const [dreams, setDreams] = useState([
    {
      name: "Dream 1",
      description: "Blissfull Dream",
    },
    {
      name: "Dream 2",
      description: "Blissfull Dream",
    },
    {
      name: "Dream 3",
      description: "Blissfull Dream",
    },
    {
      name: "Dream 4",
      description: "Blissfull Dream",
    },
    {
      name: "Dream 5",
      description: "Blissfull Dream",
    },
    {
      name: "Dream 6",
      description: "Blissfull Dream",
    },
  ]);

  return <div id="main ns-wrapper">
    {dreams.map((dream,i)=> <Dream {...dream} Tag={`h${i+1}`}/>)}
  </div>;
};

export default App;
