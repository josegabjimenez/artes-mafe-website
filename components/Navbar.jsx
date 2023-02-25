import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Navbar = () => {
	const router = useRouter();
	// Access the current route pathname
	const currentPath = router.pathname;

	console.log(currentPath);

	return (
		<div className="navbar bg-primary text-accent fixed z-20 flex justify-center  shadow-lg">
			<div className="w-full sm:w-10/12 whitespace-nowrap">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
							<li className={`${currentPath === '/' && 'opacity-30'}`}>
								<Link href="/">Inicio</Link>
							</li>
							<li className={`${currentPath === '/tejidos' && 'opacity-30'}`}>
								<Link href="/tejidos">Tejidos</Link>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl ">Artes Mafe</a>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li className={`${currentPath === '/' && 'opacity-30'}`}>
							<Link href="/">Inicio</Link>
						</li>
						<li className={`${currentPath === '/tejidos' && 'opacity-30'}`}>
							<Link href="/tejidos">Tejidos</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* <div className="navbar-end">
            <a className="btn btn-accent">Tejidos</a>
        </div> */}
		</div>
	);
};

export default Navbar;
