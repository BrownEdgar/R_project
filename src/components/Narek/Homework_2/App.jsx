import React, { useState } from 'react';
import "./App.scss";
function Header() {
	return (
		<div className='Header'>
			<div className='Header-Title'>Title</div>
			<div className='Header-Genre'>Genre</div>
			<div className='Header-Stock'>Stock</div>
			<div className='Header-Rate'>Rate</div>
		</div>
	)
}

function Container({ arr, func }) {
	function deleteFilm(idFilm) {
		const newFilms = arr.filter((elem) => {
			return elem.id !== idFilm
		})
		func(newFilms)
	}
	return (
		<div className='Container'>
			{arr.map((elem) => {
				return (
					<>
						<div className={`Container-item${elem.id}`}>
							<div className='Conatiner-Title'>{elem.title}</div>
							<div className='Conatiner-Genre'>{elem.genre}</div>
							<div className='Conatiner-Stock'>{elem.stock}</div>
							<div className='Conatiner-Rate'>{elem.rate}</div>
							<button onClick={() => deleteFilm(elem.id)}>Delete</button>
						</div>
						<hr />
					</>
				)
			})}
		</div>
	)
}


function App() {

	const [films, useFilms] = useState([
		{
			id: 1,
			title: "Terminator",
			genre: "Action",
			stock: 6,
			rate: 2.5,
		},
		{
			id: 2,
			title: "Die Hard",
			genre: "Action",
			stock: 5,
			rate: 2.5,
		},
		{
			id: 3,
			title: "Get Out",
			genre: "Thriller",
			stock: 8,
			rate: 3.5,
		},
		{
			id: 4,
			title: "Trip to Italy",
			genre: "Comedy",
			stock: 7,
			rate: 3.5,
		},
		{
			id: 5,
			title: "Airplane",
			genre: "Comedy",
			stock: 7,
			rate: 3.5,
		},
	])
	
	return (
		<div>
			<Header />
			<Container arr={films} func={useFilms} />
		</div>
	)
}


export default App;