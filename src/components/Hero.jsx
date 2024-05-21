import './../css/hero.css'

export default function Hero() {
	return (
		<div className='hero'>
			<div className='hero__text'>
				<h3>Un environnement sécurisé et bienveillant pour vos enfant</h3>
				<p>
					Notre micro-crèche vous accueillera à partir du mois d&apos;octobre
					2024
				</p>
			</div>
			<a
				href='https://kidola.app/registration/526/les-ptits-lou'
				className='hero__btn'>
				Se préinscrire
			</a>
		</div>
	)
}
