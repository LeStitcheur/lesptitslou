//Import CSS
import './../css/discoverpart.css'
//Import media
import jouet from './../assets/images/toy.png'

export default function DiscoverPart(props) {
	return (
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
	)
}
