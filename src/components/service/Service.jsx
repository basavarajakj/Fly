import './service.css';
import {
	IoDiamondOutline,
	IoShieldCheckmarkOutline,
	IoCalendarOutline,
	IoBusinessOutline
} from 'react-icons/io5';
const Service = () => {
	return (
		<section className="section service">
			<div className="container">
				<ul className="grid-list">
					<li className="service-card">
						<IoDiamondOutline />

						<h3 className="h3">
							<a href="#" className="card-title">
								Luxury & Comfort
							</a>
						</h3>
					</li>

					<li className="service-card">
						<IoShieldCheckmarkOutline />

						<h3 className="h3">
							<a href="#" className="card-title">
								Safe & Secure
							</a>
						</h3>
					</li>

					<li className="service-card">
						<IoCalendarOutline />

						<h3 className="h3">
							<a href="#" className="card-title">
								Personal Schedule
							</a>
						</h3>
					</li>

					<li className="service-card">
						<IoBusinessOutline />

						<h3 className="h3">
							<a href="#" className="card-title">
								Many Airports
							</a>
						</h3>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Service;
