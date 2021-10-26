import React from 'react'
import {Link} from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () =>{
	return(
		<div className={headerStyles.header}>
		<h1>
			<Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem}to="/">Harpreet's Blog</Link> 
		</h1>
		<nav >
			<ul className={headerStyles.navlist}>
				<li>
					<Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem}to="/"> Home </Link>
				</li>
				<li>
				    <Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem} to="/about"> About </Link>
				</li>
				<li>
					<Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem}to="/blog"> Blog </Link>
				</li>
				<li>
					<Link className={headerStyles.navitem} activeClassName={headerStyles.activeNavItem} to="/contact"> Contact </Link>
				</li>
			</ul>
		</nav>
		</div>
		)
}

export default Header