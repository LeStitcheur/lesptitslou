// Importation de modules
import { Preload } from 'react-preload'

//Import CSS
import './../css/discoverpart.css'
//Import media
import jouet from './../assets/images/toy.webp'

const images = [jouet]

export default function DiscoverPart(props) {
	return (
		<Preload
			images={images}
			mountChlidren={true}>
			<section className='discoverpart'>
				<div className='discoverpart__header'>
					<img
						src={jouet}
						alt='Icone de jouet'
					/>
					<h3>{props.title}</h3>
					<img
						src={jouet}
						alt='Icone de jouet'
					/>
				</div>
				{props.children}
			</section>
		</Preload>
	)
}
