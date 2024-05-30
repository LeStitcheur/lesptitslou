import './../css/hero.css'

import hero from './../assets/images/hero.jpg'

export default function Hero() {
	return (
		<div className='hero'>
			<img
				src={hero}
				alt='Image Hero'
			/>
			<div className='hero__text'>
				<h3>Un environnement sécurisé et bienveillant pour vos enfants</h3>
				<p>
					Notre micro-crèche vous accueillera à partir du mois d&apos;octobre
					2024
				</p>
				<a
					href='https://kidola.app/registration/526/les-ptits-lou'
					className='hero__btn'>
					Se préinscrire
				</a>
			</div>
		</div>
	)
}
