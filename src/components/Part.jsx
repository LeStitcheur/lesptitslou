export default function Part(title, subtitle = null, text, image) {
	return (
		<div className='part'>
			<h3>{title}</h3>
			{() => (subtitle ? <h4>{subtitle}</h4> : <></>)}
			<p>{text}</p>
			<img
				src={image}
				alt={title}
			/>
		</div>
	)
}
