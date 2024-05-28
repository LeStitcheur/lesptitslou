// Importation de modules
import DiscoverPart from '../components/DiscoverPart'
import Gallery from '../components/Gallery'
// Importation CSS
import './../css/discover.css'

export default function Discover() {
	return (
		<div className='discover'>
			<div className='discover__redirect'>
				<a href='pedagodie'>La pédagogies</a>
				<a href='siestes'>Les siestes pédagogiques</a>
			</div>
			<div className='discover__header'>
				<div className='discover__header__image'>
					<h4>
						Notre <br /> histoire
					</h4>
					<hr />
					<h5>
						Nos <br /> valeur
					</h5>
				</div>
				<div className='discover__header__accroche'>
					<h2>Découvrir Les P&apos;tits Lou</h2>
					<p>Là où le bien-être de l&apos;enfant sera notre priorité</p>
					<p>Avec une approche pédagogique unique</p>
				</div>
			</div>
			<DiscoverPart title='A propos de nous'>
				<p>
					Bienvenue dans l&apos;univers de notre micro-crèche, un espace conçu
					avec amour et dévouement par Anaïs Schouver, notre gérante. Fusionnant
					sa profonde passion pour la musique avec un amour inconditionnel pour
					les enfants, elle crée un environnement où les mélodies et les rythmes
					ne servent pas seulement à divertir, mais aussi à nourrir l&apos;âme
					et à stimuler la créativité des tout-petits. Son engagement à partager
					cette harmonie s&apos;inscrit parfaitement dans la mission de notre
					établissement.
				</p>
			</DiscoverPart>
			<hr />
			<DiscoverPart title='Notre Mission'>
				<p>
					La mission de notre micro-crèche est de fournit un environnement
					chaleureux, sécuritaire et stimulant où chaque enfant reçoit des soins
					de qualité adaptés à son développement. Nous mettons un point
					d&apos;honneur à promouvoir une culture d&apos;inclusion et de
					respect, où chaque enfant se sent valoriser. En établissant une
					relation de confiance avec les parents et en travaillant en étroite
					collaboration avec notre équipe dévouée, nous nous assurons du
					bien-être et de l&apos;épanouissement de chaque enfant, tout en
					veillant au respect des normes réglementaires.
				</p>
			</DiscoverPart>
			<hr />
			<DiscoverPart title='Pourquoi nous existons'>
				<p>
					La genèse de notre projet en septembre 2022 était motivée par une
					prise de conscience : le manque flagrant de structures d&apos;accueil
					adaptées aux besoins des enfants. Animée par une vision inébranlable
					et une détermination sans faille, Anaïs s&apos;est lancée dans cette
					aventure pour répondre à ce besoin essentiel. Malgré les défis et le
					obstacles rencontrés en cours de route, l&apos;équipe a su les
					surmonter avec brio, grâce à une persévérance et un engagement à tout
					épreuve.
				</p>
			</DiscoverPart>
			<hr />
			<DiscoverPart title='Engagez vous avec nous'>
				<p>
					Votre soutien et votre engagement sont essentiel à la poursuite de
					notre mission. Nous vous invitons à plonger dans notre histoire et à
					nous rejoindre dans cette aventure enrichissante. Pour le moment, bien
					que nos réseaux sociaux soient en cour de création, vous pouvez rester
					connecté et suivre notre évolution grâce à notre site web, où un
					formulaire de contact est à votre disposition. Instagram et Facebook
					sont aussi des canaux actifs où nous partagerons nos mise à jour et
					moment précieux. Ensemble, créons un lieu où chaque enfant peut
					s&apos;épanouir, explorer et grandir dans un environnement aimant et
					stimulant. Rejoignez-nous dans cette belle aventure !
				</p>
			</DiscoverPart>
			<Gallery />
		</div>
	)
}
