// Importation CSS
import './../css/header.css'

export default function Header() {
	return (
		<div className='header'>
			<div className='header__logo'>
				<a href='/'>
					<img
						src='./assets/images/logo.png'
						alt="Logo Les P'tits Lou"
					/>
				</a>
			</div>

			<div className='header__text'>
				<h1>Les P&apos;tits Lou</h1>
				<h2>Micro-crèche - YUTZ</h2>
			</div>
		</div>
	)
}
