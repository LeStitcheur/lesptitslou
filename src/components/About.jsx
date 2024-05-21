import 'boxicons'
import './../css/about.css'

export default function About() {
	return (
		<div className='about'>
			<div className='about__title'>
				<h4>Nos objectifs fondamentaux</h4>
				<p>Des soins attentifs d&apos;excellence</p>
			</div>

			<div className='about__body'>
				<div className='about__body__item'>
					<box-icon
						size='lg'
						color='#3d9be9'
						name='star'
					/>
					<h5>Épanouissement</h5>
					<p>
						Permettre à chaque enfant de s’épanouir pleinement en respectant son
						rythme et en lui apportant la sécurité affective nécessaire à son
						développement.
					</p>
				</div>

				<div className='about__body__item'>
					<box-icon
						size='lg'
						color='#f37a17'
						name='star'
					/>
					<h5>Accompagnement</h5>
					<p>
						Accompagner l&apos;enfant vers l&apos;autonomie, en favorisant le
						développement libre et autonome tout en respectant le rythme de vie
						et l’autonomie de chacun : repas, sommeil, jeu, propreté,
						communication, motricité…
					</p>
				</div>

				<div className='about__body__item'>
					<box-icon
						size='lg'
						color='#3d9be9'
						name='star'
					/>
					<h5>Apporter du lien</h5>
					<p>
						Pratique d&apos;activités d&apos;éveil et de découverte pour le
						développement moteur, psychologique, affectif ainsi que l&apos;éveil
						des sens grâce à l&apos;espace snoezelen dédié à fournir tout le
						bien-être nécessaire à l&apos;enfant à travers les 5 sens.
					</p>
				</div>
				<div className='about__body__item'>
					<box-icon
						size='lg'
						color='#f37a17'
						name='star'
					/>
					<h5>Apprendre à vivre ensemble</h5>
					<p>
						Apprentissage de la vie en collectivité et respect des uns envers
						les autres : intégration au sein de la structure d&apos;enfants
						porteurs d’un handicap ou d’une maladie chronique.
					</p>
				</div>
			</div>
		</div>
	)
}
