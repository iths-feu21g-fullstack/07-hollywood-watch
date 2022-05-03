import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {

	return (
		<>
		<header>
			<h1> Hollywood watch </h1>
			<input type="text" />
			<span className="magnify-search">🔍</span>
		</header>

		<main className="card-grid">
			<section className="card ">
				<div className="image"> image </div>
				<h3> My neighbour Totoro </h3>
				<p> 2021-09-28 </p>
			</section>
			
			<section className="card">
				<div className="image"> image </div>
				<h3> My neighbour Totoro </h3>
				<p> 2021-09-28 </p>
			</section>
			
			<section className="card">
				<div className="image"> image </div>
				<h3> My neighbour Totoro </h3>
				<p> 2021-09-28 </p>
			</section>
			
			<section className="card">
				<div className="image"> image </div>
				<h3> My neighbour Totoro </h3>
				<p> 2021-09-28 </p>
			</section>
			
			<section className="card">
				<div className="image"> image </div>
				<h3> My neighbour Totoro </h3>
				<p> 2021-09-28 </p>
			</section>
			
			<section className="card">
				<div className="image"> image </div>
				<h3> My neighbour Totoro </h3>
				<p> 2021-09-28 </p>
			</section>
			
		</main>
		</>
	)
}

export default App
