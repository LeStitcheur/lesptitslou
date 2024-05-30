import './../css/exemple.css'

export default function Exemple(props) {
	return (
		<div className='exemple'>
			<img
				src={props.image}
				alt={props.alt}
			/>
			<div className='exemple-text'>{props.children}</div>
		</div>
	)
}
