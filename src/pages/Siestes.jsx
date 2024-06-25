// Importation de modules
import ReactPlayer from 'react-player/youtube'
import Exemple from '../components/Exemple'
import { Preload } from 'react-preload'

//Importation CSS
import './../css/siestes.css'

//Importation de medias
import image from './../assets/images/generate-sieste-nordique_edited.webp'
import baby from './../assets/images/baby.webp'
import ble from './../assets/images/ble.webp'

const images = [{ image }, { baby }, { ble }]

export default function Siestes() {
	const url = 'https://youtu.be/Fl7cOU8bCFs?si=4nu2thKt8qbJlamb'

	return (
		<Preload
			images={images}
			autoResolveDelay={3000}
			mountChlidren={true}>
			<div className='siestes'>
				<div className='siestes__redirect'>
					<a
						href='pedagogie'
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
						La pédagogies
					</a>
					<a
						href='siestes'
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
						Les siestes nordiques
					</a>
				</div>
				<div className='siestes__header'>
					<div className='siestes__header__image'>
						<img
							src={image}
							alt='Image sieste nordique'
						/>
						<div className='siestes__header__title'>
							<h4>Les siestes nordiques</h4>
							<hr />
						</div>
					</div>
					<div className='siestes__header__accroche'>
						<p>
							La sieste nordique est une méthode de relaxation qui nous vient
							des pays scandinaves. C&apos;est une pause bien-être qui permet de
							se ressourcer et de retrouver de l&apos;énergie. Pendant, cette
							sieste, on se couvre d&apos;une couverture douce, on
							s&apos;installe confortablement et on se concentre sur sa
							respiration pour se détendre. C&apos;est un moment de calme et de
							repos qui aide à diminuer le stress et à améliorer la qualité du
							sommeil. Nous proposons d&apos;introduire cette pratique dans
							notre quotidien pour favoriser le bien-être de chacun.
						</p>
					</div>
				</div>
				<div className='player-wrapper'>
					<ReactPlayer
						className='react-player'
						url={url}
						controls={true}
						width='100%'
						height='100%'
					/>
				</div>

				<div className='exemple-liste'>
					<Exemple
						image={ble}
						alt="Image d'un champ de blé">
						<h5>
							Les bienfaits <br /> de la sieste nordique
						</h5>
						<p>
							• Un grand bol d&apos;air frais pour améliorer la respiration et
							le système immunitaire des enfants. <br />
							• Des siestes plus longues. <br />
							• Ils s&apos;habituent aux bruits extérieurs. <br />• Plus de
							flexibilité et de liberté pour vous.
						</p>
					</Exemple>
					<Exemple
						image={baby}
						alt="Image d'un bébé qui dort">
						<h5>Les recommendations</h5>
						<p>
							Il faut noter que la sieste nordique est prise de manière
							judicieuse et dans la sécurité de l&apos;enfant. Celui-ci sera
							emmailloté dans plusieurs couches de vêtements chauds et épais
							pour ne pas qu&apos;il ai froid. Il sera à la vue des encadrantes
							qui le surveille. <br />
							Elle ne doit pas durer trop longtemps et la température ne doit
							pas être en dessous de 0°C.
						</p>
					</Exemple>
				</div>
			</div>
		</Preload>
	)
}
