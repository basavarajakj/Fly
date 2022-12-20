import React from 'react';
import About from './components/about/About';
import Feature from './components/Feature/Feature';
import Flight from './components/flight/Flight';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import NewsLetter from './components/newsLetter/NewsLetter';
import Offer from './components/offer/Offer';
import Service from './components/service/Service';

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<article>
					<Hero />
					<Service />
					<About />
					<Feature />
					<Offer />
					<Flight />
					<NewsLetter />
				</article>
			</main>
		</div>
	);
};

export default App;
