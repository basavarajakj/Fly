import './newsLetter.css';
import { IoAirplaneSharp } from 'react-icons/io5';
import newsletterImage from '../../assets/newsletter-bg.png';
const NewsLetter = () => {
	return (
		<section className="section newsletter has-bg-image">
			<div className="container">
				<div>
					<p className="section-subtitle">Subscribe Now</p>

					<h2 className="h2 section-title">
						Want to know about our offers first?
					</h2>
				</div>

				<div>
					<form action="" className="newsletter-form">
						<input
							type="email"
							name="email_address"
							placeholder=" Enter email address"
							className="input-field"
						/>
						<button type="submit" className="btn btn-secondary">
							Subscribe
							<IoAirplaneSharp />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
