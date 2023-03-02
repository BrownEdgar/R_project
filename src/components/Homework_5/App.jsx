import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DataBlock from "./Components/DataBlock";

import "./App.scss";

function App() {
	const [data, setData] = useState({})
	const [index, setIndex] = useState(1)

	useEffect(() => {
		function getData() {
			axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`)
				.then(response => setData(response.data))
		}
		getData()
	}, [index])
	
	function nextIndex() {
		return setIndex(index + 1)
	}
	return (
		<div className="main">
			<p className="main_title">get post N{index} every <span className="main_click" onClick={nextIndex}>click</span> time with fetch</p>
			<DataBlock data={data} />
			<button className="button-49" onClick={nextIndex}>next ID</button>
		</div>
	)
}

export default App;
