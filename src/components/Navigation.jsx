//Importations Modules
import { NavLink } from 'react-router-dom'

//Importation CSS
import './../css/navigation.css'

export default function Navigation() {
	return (
		<div className='navigation'>
			<ul className='main'>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/découvrir'
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
						Découvrir
					</NavLink>
					<ul className='sub'>
						<li>
							<NavLink
								to='/pedagogie'
								className={({ isActive }) =>
									isActive ? 'activeLink' : undefined
								}>
								La pédagogie
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/siestes'
								className={({ isActive }) =>
									isActive ? 'activeLink' : undefined
								}>
								Les siestes nordiques
							</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink
						to='/objectifs'
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
						Notre objectif
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/contact'
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	)
}
