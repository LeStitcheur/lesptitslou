// Importation CSS
import './../css/legals.css'
import { Preload } from 'react-preload'

//Importation medias
import hero from './../assets/images/hero.webp'

// Importation de données
import datas from './../lib/mentions.json'
import Article from '../components/Article'

const newLine = (string) => {
	return string.split('\n').map((item, index) => {
		return index === 0 ? item : [<br key={index} />, item]
	})
}

const images = [{ hero }]

export default function Mentions() {
	return (
		<Preload
			images={images}
			autoResolveDelay={3000}
			mountChildren={true}>
			<div className='legals'>
				<div className='background'>
					<img
						src={hero}
						alt="Image d'un enfant qui joue"
					/>
				</div>
				<div className='legals__content'>
					<div className='legals__content__title'>
						<h2>Mentions Légales</h2>
						<p>
							En vigueur au 18/03/2024. Conformément aux dispositions des
							Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
							Confiance dans l&apos;économie numérique, dite L.C.E.N., il est
							porté à la connaissance des utilisateurs du site
							les-pt-its-lou.com les présentes mentions légales. La connexion et
							la navigation sur le site les-pt-its-lou.com par
							l&apos;Utilisateur implique acceptation intégrale et sans réserves
							des présentes mentions légales. Ces dernières sont accessibles sur
							les site à la rubrique « Mentions légales ».
						</p>
					</div>
					<hr />
					{datas.map((article) => (
						<Article
							key={article.id}
							id={article.id}
							title={article.title}>
							<p>{newLine(article.content)}</p>
						</Article>
					))}
				</div>
			</div>
		</Preload>
	)
}
