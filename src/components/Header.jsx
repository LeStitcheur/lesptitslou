//Importation de modules
import { Preload } from 'react-preload'

// Importation CSS
import './../css/header.css'
// Importation Medias
import logo from './../assets/images/logo.webp'

const images = [{ logo }]

export default function Header() {
	return (
		<Preload
			images={images}
			autoResolveDelay={3000}
			mountChlidren={true}>
			<div className='header'>
				<div className='header__logo'>
					<a href='/'>
						<img
							src={logo}
							alt="Logo Les P'tits Lou"
						/>
					</a>
				</div>

				<div className='header__text'>
					<h1>Les P&apos;tits Lou</h1>
					<h2>Micro-crèche - YUTZ</h2>
				</div>
			</div>
		</Preload>
	)
}
