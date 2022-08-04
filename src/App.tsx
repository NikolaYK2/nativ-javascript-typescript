import React from 'react';
import './App.css';
import {User} from "./06/06-callbacks";
import {Destructuring} from "./06/Destructuring";

let man = {
    name:"Nik",
    age: 30,
    lessons: [{title:"1"}, {title: '2'},]
}
let food = 'ches';
let car = {
    model: "VW"
}

function App() {
  return (
    <div className="App">
      <User/>
      <Destructuring man={man} food={food} car={car}/>
    </div>
  );
}

export default App;
