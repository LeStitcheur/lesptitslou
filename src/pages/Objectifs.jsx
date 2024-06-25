// Importation de modules
import { Preload } from 'react-preload'

// Importation css
import './../css/objectifs.css'

// Importation medias
import creche from '../assets/images/creche-enfants.webp'
import creche2 from '../assets/images/creche2.webp'
import creche3 from '../assets/images/creche3.webp'

const images = [{ creche }, { creche2 }, { creche3 }]

export default function Objectifs() {
	return (
		<Preload
			images={images}
			autoResolveDelay={3000}
			mountChlidren={true}>
			<div className='objectifs'>
				<section className='part'>
					<h3 className='title'>Notre objectif</h3>
					<h4 className='subtitle'>Unique et précieux</h4>
					<p className='text'>
						Du développement du langage et de l’alphabétisation aux compétences
						sociales et à la créativité, les enfants de &ldquo;Les P&apos;tits
						Lou &rdquo; sont constamment exposés à de nouvelles activités et à
						de nouveaux environnements dans lesquels s’épanouir. Nous misons sur
						les forces et les intérêts de chaque enfant pour les aider à bâtir
						une base solide sur laquelle ils pourront compter pour développer
						leur avenir. Pour en apprendre plus sur nous, contactez-nous.
					</p>
					<img
						src={creche}
						alt='notre objectif image'
					/>
				</section>
				<section className='part'>
					<h4 className='subtitle'>
						Pour l&apos;épanouissement de votre enfant
					</h4>
					<p className='text'>
						Les P&apos;tits Lou permettront une prise en charge de chaque enfant
						en tant qu’individu à part entière dans le respect de son rythme, de
						ses besoins, de ses compétences et de son degré de compréhension. Il
						s’agit avant tout pour l’équipe de préserver le bien-être de
						l’enfant afin qu’il puisse s’épanouir pleinement dans ce lieu
						collectif.
					</p>
					<img
						src={creche2}
						alt='epanouissement image'
					/>
				</section>
				<section className='part'>
					<h3 className='title'>Cahier des charges</h3>
					<h4 className='subtitle'>Innovant et responsable</h4>
					<p className='text'>
						Nous pensons que les enfants s&apos;épanouissent mieux dans un
						environnement qui valorise leur identité individuelle, en leur
						permettant de grandir et de développer leurs capacités
						émotionnelles, sociales et créatives. En nous appuyant sur les
						forces, les intérêts et la curiosité de chaque enfant, nous les
						guidons dans l&apos;exploration du monde qui les entoure, ainsi que
						dans le développement de leurs capacités et de nouvelles amitiés.
					</p>
					<img
						src={creche3}
						alt='cahier des charges image'
					/>
				</section>
			</div>
		</Preload>
	)
}
