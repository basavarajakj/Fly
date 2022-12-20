import './Header.css';
import logo from '../../assets/logo.svg';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [scroll, setScroll] = useState(false);

	const onScrollActiveHeader = () => {
		if (window.scrollY > 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	useEffect(() => {
		document.addEventListener('scroll', onScrollActiveHeader);
		return () => {
			document.removeEventListener('scroll', onScrollActiveHeader);
		};
	}, [scroll, setScroll]);

	const handleToggle = () => {
		setToggle(true);
	};
	return (
		<header className={scroll ? 'header active' : 'header'}>
			<div className="container">
				<a href="#" className="logo">
					<img src={logo} alt="fly logo" width="102" height="48" />
				</a>

				<nav className={toggle ? 'navbar active' : 'navbar'}>
					<div className="navbar-top">
						<a href="#" className="logo">
							<img src={logo} alt="fly logo" width="102" height="48" />
						</a>

						<button className="nav-close-btn" onClick={() => setToggle(false)}>
							<IoMdClose />
						</button>
					</div>

					<ul className="navbar-list">
						<li className="navbar-item">
							<a
								href="#"
								className="navbar-link"
								onClick={() => setToggle(false)}>
								Home
							</a>
						</li>

						<li className="navbar-item">
							<a
								href="#"
								className="navbar-link"
								onClick={() => setToggle(false)}>
								Services
							</a>
						</li>

						<li className="navbar-item">
							<a
								href="#"
								className="navbar-link"
								onClick={() => setToggle(false)}>
								News
							</a>
						</li>

						<li className="navbar-item">
							<a
								href="#"
								className="navbar-link"
								onClick={() => setToggle(false)}>
								Shop
							</a>
						</li>
						<li className="navbar-item">
							<a
								href="#"
								className="navbar-link"
								onClick={() => setToggle(false)}>
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<div className="header-action">
					<button className="header-action-btn">
						<IoMdSearch />
					</button>

					<button className="header-action-btn">
						<AiOutlineShoppingCart />
					</button>
					<button
						className="header-action-btn nav-open-btn"
						onClick={handleToggle}>
						<RiMenu3Fill />
					</button>
				</div>

				<div className="overlay"></div>
			</div>
		</header>
	);
};

export default Header;
