import './feature.css';
import feature1 from '../../assets/feature-1.jpg';
import feature2 from '../../assets/feature-2.jpg';
import { IoArrowForwardOutline } from 'react-icons/io5';
const Feature = () => {
	return (
		<section className="section feature">
			<div className="container">
				<ul className="grid-list">
					<li>
						<div className="feature-content has-before">
							<p className="section-subtitle">Collect Miles</p>

							<h2>
								<a href="#" className="section-title">
									Get discount next flights with our card
								</a>
							</h2>

							<p className="section-text">
								Non augue egestas, commodo velit eget, vestibulum tellus.
								Curabitur vulputate justo elit, at elementum orci pulvinar vel.
							</p>

							<a href="#" className="btn btn-secondary">
								Get Card
							</a>
						</div>
					</li>

					<li>
						<div
							className="feature-card has-before has-after img-holder"
							style={{
								backgroundImage: `url(${feature1})`,
								'--width': 370,
								'--height': 452
							}}>
							<h3 className="h3">
								<a href="#" className="card-title">
									Exclusive <br /> new offers
								</a>
							</h3>
							<a href="#" className="card-btn">
								<IoArrowForwardOutline />
							</a>
						</div>
					</li>

					<li>
						<div
							className="feature-card has-before has-after img-holder"
							style={{
								backgroundImage: `url(${feature2})`,
								'--width': 370,
								'--height': 452
							}}>
							<h3 className="h3">
								<a href="#" className="card-title">
									Join our cabin crew
								</a>
							</h3>
							<a href="#" className="card-btn">
								<IoArrowForwardOutline />
							</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Feature;
