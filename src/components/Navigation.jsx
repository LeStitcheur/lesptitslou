// Importation de modules
import { useRef } from 'react'

//Importations Modules
import { NavLink } from 'react-router-dom'

//Importation CSS
import './../css/navigation.css'

export default function Navigation() {
	const navRef = useRef()

	const showNavBar = () => {
		navRef.current.classList.toggle('responsive_nav')
	}

	return (
		<div>
			<nav
				className='navigation'
				ref={navRef}>
				<ul className='main'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'activeLink' : undefined
							}>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/decouvrir'
							className={({ isActive }) =>
								isActive ? 'activeLink' : undefined
							}>
							Découvrir
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/objectifs'
							className={({ isActive }) =>
								isActive ? 'activeLink' : undefined
							}>
							Notre objectif
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/contact'
							className={({ isActive }) =>
								isActive ? 'activeLink' : undefined
							}>
							Contact
						</NavLink>
					</li>
					<button
						className='nav-btn nav-close-btn'
						onClick={showNavBar}>
						<box-icon
							name='x'
							color='darkred'
							size='lg'></box-icon>
					</button>
				</ul>
			</nav>
			<button
				className='nav-btn'
				onClick={showNavBar}>
				<box-icon
					name='menu'
					color='#f37a17'
					size='lg'></box-icon>
			</button>
		</div>
	)
}
