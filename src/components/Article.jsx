import './../css/article.css'

export default function Article(props) {
	return (
		<div className='article'>
			<div className='article__title'>
				<h3>{props.id}</h3>
				<h4>{props.title}</h4>
			</div>
			{props.children}
			<hr />
		</div>
	)
}
