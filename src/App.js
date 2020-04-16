import React, { useState } from "react";
import "./styles.css";
import { Listener } from './Listener'

export default function App() {
  const [clickCount, setClickCount] = useState(0)
  function increment() {
    setClickCount(prev => prev + 1)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button onClick={increment}>Increment</button>
      <ul className="grid-x grid-margin-x">
        
        <Listener max={5} num={clickCount} throwOnNumber={2}/>
        <Listener max={5} num={clickCount} />
      </ul>
    </div>
  );
}
