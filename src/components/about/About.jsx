import './about.css';
import { IoCheckmarkSharp } from 'react-icons/io5';
import aboutBanner from '../../assets/about-banner.jpg';
const About = () => {
	return (
		<section className="section about" id="about">
			<div className="container">
				<div className="about-content">
					<p className="section-subtitle">Get To Know Us</p>

					<h2 className="h2 section-title">
						Our fly save your time and give you comfort in flights
					</h2>

					<p className="section-text">
						Non augue egestas, commodo velit eget, vestibulum tellus. curabitur
						vulputate justo elit, at elementum orci pulvinar vel. pellentesque
						habitant morbi tristique. pellentesque habitant morbi tristique. ut
						non augue egestas, commodo velit eget, vestibulum tellus.
					</p>

					<ul className="about-list">
						<li className="about-list-item">
							<IoCheckmarkSharp />
							<p className="item-text">
								There are many variations of passage of lorem.
							</p>
						</li>
						<li className="about-list-item">
							<IoCheckmarkSharp />
							<p className="item-text">
								Available but the majority alteration.{' '}
							</p>
						</li>
					</ul>

					<a href="#" className="btn btn-primary">
						Book Now
					</a>
				</div>

				<figure className="about-banner img-holder">
					<img
						src={aboutBanner}
						alt="about banner image"
						width="470"
						height="550"
						className="img-cover"
					/>
				</figure>
			</div>
		</section>
	);
};

export default About;
