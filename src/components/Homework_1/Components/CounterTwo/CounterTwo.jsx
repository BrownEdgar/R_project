import React from "react";
import "./CounterTwo.css";
export default function CounterTwo() {
  const [count, setCount] = React.useState(0);
	const pluse = () => (count < 10 ? setCount(count + 1) : setCount(count));
	const minus = () => (count > 0 ? setCount(count - 1) : setCount(count));

  return (
    <div className="counter-cont_2">
      <span className="task_2">Task_2</span>
      <p className="count_2">{count}</p>
      <div className="btn_cont_2">
        <button className="button-29" role="button" onClick={minus}>
          Minus
        </button>
        <button className="button-29" role="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="button-29" role="button" onClick={pluse}>
          Plus
        </button>
      </div>
    </div>
  );
}
