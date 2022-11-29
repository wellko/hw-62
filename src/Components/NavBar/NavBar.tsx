import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<span className="navbar-brand">Kwon</span>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink to='/' className="nav-link">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to='/education' className="nav-link">Education</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to='/contacts' className="nav-link">Contacts</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to='portfolio' className="nav-link">Portfolio</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;