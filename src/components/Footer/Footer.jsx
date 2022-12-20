import './footer.css';
import logo from '../../assets/logo.svg';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { TbBrandMeta } from 'react-icons/tb';
import {
	IoIosMail,
	IoLogoTwitter,
	IoLogoPinterest,
	IoLogoInstagram
} from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
function Footer() {
	return (
		<section className="footer">
			<div className="container">
				<div className="footer-top section grid-list">
					<div className="footer-brand">
						<a href="#" className="logo">
							<img src={logo} alt="fly logo" />
						</a>
						<p className="footer-text">
							Private jet charters save your time and give you comfort.
						</p>
					</div>

					<ul className="footer-list">
						<li>
							<p className="footer-list-title">Explore</p>
						</li>

						<li>
							<a href="#" className="footer-link">
								About
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								Private Jet Catering
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								Destinations
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								Flight Search
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								Terms of Use
							</a>
						</li>
					</ul>

					<ul className="footer-list">
						<li>
							<p className="footer-list-title">Links</p>
						</li>
						<li>
							<a href="#" className="footer-link">
								Contact
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								News & Press
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								Games
							</a>
						</li>
						<li>
							<a href="#" className="footer-link">
								FAQs
							</a>
						</li>
					</ul>

					<ul className="footer-list">
						<li>
							<p className="footer-list-title">Contact</p>
						</li>
						<li className="footer-list-item">
							<HiDevicePhoneMobile />
							<a href="tel:+91 9049567883" className="footer-link">
								+91 9049567883
							</a>
						</li>
						<li className="footer-list-item">
							<IoIosMail />
							<a href="mailto:fly@info.com" className="footer-link">
								fly@info.com
							</a>
						</li>
						<li className="footer-list-item">
							<IoLocationSharp />
							<address className="address">
								St street, Banglore, Karnataka
							</address>
						</li>
					</ul>
				</div>

				<div className="footer-bottom">
					<p className="copyright">
						Copyright {Date().slice(10, 15)} by BassuJk
					</p>

					<div className="social-list">
						<li>
							<a href="#" className="social-link">
								<IoLogoTwitter />
							</a>
						</li>
						<li>
							<a href="#" className="social-link">
								<TbBrandMeta />
							</a>
						</li>
						<li>
							<a href="#" className="social-link">
								<IoLogoPinterest />
							</a>
						</li>
						<li>
							<a href="#" className="social-link">
								<IoLogoInstagram />
							</a>
						</li>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
