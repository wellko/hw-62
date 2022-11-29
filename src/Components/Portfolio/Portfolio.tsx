import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Portfolio = () => {
	return (
		<div className='container border rounded border-5 border-primary'>
			<p>App for Chat <Link to='work1'>Watch</Link></p>
			<p>App for generate 5 Chuck Noris jokes and Movie watch List <Link to='work2'>Watch</Link></p>
			<p>App for getting information about any country<Link to='work3'>Watch</Link></p>
			<Outlet></Outlet>
		</div>
	);
};

export default Portfolio;