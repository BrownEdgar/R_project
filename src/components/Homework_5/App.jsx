import { useState } from "react";
import { useData } from "./hooks/useData";
import { useIndex } from "./hooks/useIndex";
import DataBlock from "./Components/DataBlock";

import "./App.scss";

function App() {
	const { data } = useData()
	const { index, nextIndex } = useIndex()

	return (
		<div className="main">
			<p className="main_title">get post N{index} every <span className="main_click" onClick={nextIndex}>click</span> time with fetch</p>
			<DataBlock data={data[index]} />
			<button className="button-49" onClick={nextIndex}>next ID</button>
		</div>
	)
}

export default App;
