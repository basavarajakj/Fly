import './offer.css';
import offerBanner from '../../assets/offer-banner.jpg';
const Offer = () => {
	return (
		<section className="offer">
			<div className="offer-content section">
				<div className="container">
					<p className="section-subtitle">Special Offer</p>
					<h2 className="h2 section-title">
						The best service for business people who appreciate time
					</h2>

					<p className="section-text">
						Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur
						vulputate justo elit, at elementum pulvinar. Pellentesque habitant
						morbi tristique.
					</p>
					<a href="#" className="btn btn-primary">
						Discover More
					</a>
				</div>
			</div>
			<div className="offer-banner has-bg-image"></div>
		</section>
	);
};

export default Offer;
