import React from 'react';
import About from './components/about/About';
import Feature from './components/Feature/Feature';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
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
				</article>
			</main>
		</div>
	);
};

export default App;
