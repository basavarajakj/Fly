import './flight.css';
import { IoAirplaneSharp } from 'react-icons/io5';
import flight1 from '../../assets/flight-1.png';
const Flight = () => {
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	let currentDate = new Date();
	let currenrDay = weekday[currentDate.getDay()];
	return (
		<section className="section flight">
			<div className="container">
				<ul className="grid-list">
					<li>
						<div className="flight-content">
							<p className="section-subtitle">Private Flights</p>
							<h2 className="h2 section-title">Browse legs of our charters</h2>

							<p className="section-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Curabitur condimentum, lacus non faucibus congue, lectus quam
								viverra nulla, quis egestas neque sapien ac magna.
							</p>
						</div>
					</li>

					<li>
						<div className="flight-card">
							<h3 className="card-title">
								Mumbai
								<IoAirplaneSharp />
								Bangalore
							</h3>

							<div className="card-banner">
								<img
									src={flight1}
									alt="new york to moscow flight airplane"
									loading="lazy"
									width="263"
									height="84"
									className="w-100"
								/>
							</div>

							<ul className="card-list">
								<li className="card-item">
									<span className="span">Date:</span>
									{`${currenrDay}, ` + Date().slice(4, 15)}
								</li>

								<li className="card-item">
									<span className="span">Departure:</span>
									11:25 pm
								</li>

								<li className="card-item">
									<span className="span">Arrival:</span>
									02:25 am
								</li>

								<li className="card-item">
									<span className="span">Starting From:</span>₹ 8999.00
								</li>
								<li className="card-item">
									<span className="span">Person:</span>Adult 3
								</li>
							</ul>

							<a href="@" className="btn btn-primary">
								Book Now
							</a>
						</div>
					</li>

					<li>
						<div className="flight-card">
							<h3 className="card-title">
								Mumbai
								<IoAirplaneSharp />
								Bangalore
							</h3>

							<div className="card-banner">
								<img
									src={flight1}
									alt="new york to moscow flight airplane"
									loading="lazy"
									width="263"
									height="84"
									className="w-100"
								/>
							</div>

							<ul className="card-list">
								<li className="card-item">
									<span className="span">Date:</span>
									{`${currenrDay}, ` + Date().slice(4, 15)}
								</li>

								<li className="card-item">
									<span className="span">Departure:</span>
									11:25 pm
								</li>

								<li className="card-item">
									<span className="span">Arrival:</span>
									02:25 am
								</li>

								<li className="card-item">
									<span className="span">Starting From:</span>₹ 8999.00
								</li>
								<li className="card-item">
									<span className="span">Person:</span>Adult 3
								</li>
							</ul>

							<a href="@" className="btn btn-primary">
								Book Now
							</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Flight;
