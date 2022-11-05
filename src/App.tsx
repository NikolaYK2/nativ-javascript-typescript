import React from 'react';
import './App.css';
import {User} from "./06/06-callbacks";
import {Destructuring} from "./06/Destructuring";
import {getBanknoteList} from "./11-lessons8-JS-tests/lesson-8";

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
    let a = getBanknoteList(350);
    console.log(a)
  return (
    <div className="App">
      <User/>
      <Destructuring man={man} food={food} car={car}/>
    </div>
  );
}

export default App;
