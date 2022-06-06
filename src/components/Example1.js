import { useState } from "react";
import Example2 from "./Example2";

function Example1(props) {
  const [number, setNumber] = useState(0);
  
  const addNumber = () => setNumber(number => number + 1);
  const removeNumber = () => setNumber(number => number - 1);
  return (
    <div>
      <button onClick={removeNumber}>-</button> 
      <Example2 number={number} addNumber={addNumber}/>
    </div>
  );
}

export default Example1;