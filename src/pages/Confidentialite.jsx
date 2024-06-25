//Importation de modules
import Article from '../components/Article'
import { Preload } from 'react-preload'

//Importation CSS
import './../css/legals.css'

//Importation médias
import hero from './../assets/images/hero.webp'

//Importation de datas
import datas from './../lib/confi.json'

const newLine = (string) => {
	return string.split('\n').map((item, index) => {
		return index === 0 ? item : [<br key={index} />, item]
	})
}

const images = [{ hero }]

export default function Confidentialite() {
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
						<h2>Politique de Confidentialité</h2>
						<p>
							Une politique de confidentialité est un document ou un contrat qui
							expose les engagements de l&apos;entreprise en matière de
							traitement des données personnelles des utilisateurs (d&apos;un
							service, d&apos;un site Web…). Cette politique doit expliquer en
							détail le mode de collecte, le traitement, le procédé de
							publication et de suppression des données personnelles, ainsi que
							la finalité de ces procédés. L&apos;information qui figure dans la
							politique de confidentialité doit être claire, concise et
							transparente.
						</p>
						<p className='ital'>
							Date d&apos;entrée en vigueur: <b>18 mars 2024</b>
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
