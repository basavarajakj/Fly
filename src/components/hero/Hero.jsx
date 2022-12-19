import './hero.css';
import heroBanner from '../../assets/hero-banner.png';
const Hero = () => {
	return (
		<section className="sectio hero" id="home">
			<div className="container">
				<p className="hero-subtitle">Save time and fly with comfort</p>

				<h1 className="h1 hero-title">Luxury Jet Flights</h1>

				<div className="btn-wrapper">
					<a href="#" className="btn btn-primary">
						Book Now
					</a>

					<a href="#" className="btn btn-secondary">
						Read More
					</a>
				</div>

				<img
					src={heroBanner}
					alt="airplane"
					width="1474"
					height="426"
					className="abs-img"
				/>
			</div>
		</section>
	);
};

export default Hero;
