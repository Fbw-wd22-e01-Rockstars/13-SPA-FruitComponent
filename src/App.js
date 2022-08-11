import React, { useState } from "react";
import Fruit from "./components/Fruit";

export default function App() {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana", "Lemon"]);


  return (
    <div>
      <h1>Fruits Components</h1>
      {fruits.map(fruit=>{
          return( <Fruit key={fruit} fruitName={fruit} setFruits={setFruits} fruits={fruits}/>)
        })} 

 

    </div>
  );
}
