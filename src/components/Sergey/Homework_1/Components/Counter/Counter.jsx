import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  function pluse() {
    const randNumb = Math.trunc(Math.random() * 10);
    setCount(count + randNumb);
  }
  function minus() {
    const randNumb = Math.trunc(Math.random() * 10);
    setCount(count - randNumb);
  }
  return (
    <div className="counter-cont">
      <span className="task">Task_1</span>
      <p className="count">{count}</p>
      <div className="btn_cont">
        <button className="button-30"  onClick={minus}>
          Minus
        </button>
        <button className="button-30"  onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="button-30"  onClick={pluse}>
          Plus
        </button>
      </div>
    </div>
  );
}
