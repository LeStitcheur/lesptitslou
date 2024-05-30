import DiscoverPart from './../components/DiscoverPart'

import './../css/pedagogie.css'
import pedagogieImg from './../assets/images/generate-pedagogie-colord.webp'
import babyHand from './../assets/images/baby-hand.webp'
import rempBaby from './../assets/images/bebe-rempant.webp'
import momBaby from './../assets/images/mom&baby.webp'

export default function Pedagogie() {
	return (
		<div className='pedagogie'>
			<div className='pedagogie__redirect'>
				<a
					href='pedagogie'
					className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
					La pédagogies
				</a>
				<a
					href='siestes'
					className={({ isActive }) => (isActive ? 'activeLink' : undefined)}>
					Les siestes nordiques
				</a>
			</div>
			<div className='pedagogie__header'>
				<div className='pedagogie__header__image'>
					<img
						src={pedagogieImg}
						alt=''
					/>
					<div className='pedagogie__header__title'>
						<h4>Notre pédagogie</h4>
						<hr />
					</div>
				</div>
				<div className='pedagogie__header__accroche'>
					<p>
						Notre micro crèche accompagne vos enfants dans leur apprentissage
						grâce à une approche pédagogique unique. Nos professionnels suivent
						une formation continue pour établir un cadre adapté à la pédagogique
						Loczy &quot;motricité libre&quot;. Le développement de votre enfant
						est également favorisé par le contact quotidien avec le grand air.
					</p>
				</div>
			</div>
			<DiscoverPart title='La motricité libre'>
				<p>
					La motricité libre est une approche qui consiste à laisser
					l&apos;enfant libre de ses mouvements spontanés. L&apos;enfant
					bénéficie d&apos;une totale liberté et choisit ses activités en
					fonction de ses envies et de son rythme. L&apos;adulte n&apos;enseigne
					donc aucun mouvement à l&apos;enfant puisqu&apos;il n&apos;intervient
					pas dans les activités de ce dernier. Cependant, l&apos;adulte a le
					devoir de lui proposer un environnement adapté, sécurisant et
					stimulant. <br />
					<br />
					Selon Emmi Pikler, ces deux principes permettent à l&apos;enfant de
					découvrir son corps et d&apos;aller à l&apos;aventure. L&apos;activité
					facilite son développement psychomoteur et lui permet d&apos;apprendre
					de lui-même et par lui-même. Au fil du temps, le bébé prend conscience
					de son corps, de son potentiel et de ses limites. Il pourra ainsi
					acquérir une très grande aisance corporelle qui lui permettra de
					construire un sentiment de confiance. Beaucoup de personnes ont
					entendu parlés du fameux triangle de Pikler, d&apos;où vient-il ?
					<br />
					<br />
					Ce triangle porte le nom d&apos;une pédiatre hongroise Emmi Pikler qui
					a créé d&apos;autres modules de motricité et la méthode Loczy
				</p>
				<img
					src={rempBaby}
					alt='Bébé rempant'
					loading='lazy'
				/>
			</DiscoverPart>
			<DiscoverPart title='La méthode Loczy'>
				<p>
					Éduquer un enfant à la Pikler, cela revient à le laisser entièrement
					libre et autonome dans sa construction et son développement, tout en
					étant disponible pour lui. La motricité libre et l&apos;activité
					autonome sont donc la base de la méthode Loczy. Pour appliquer cette
					pédagogie, il est essentiel de laisser le petit puiser dans ses
					propres ressources, sans l&apos;intervention permanente d&apos;un
					adulte. Emmi Pikler part du principe qu&apos;en aidant tout le temps
					un enfant à résoudre ses problèmes, on l&apos;empêche de se développer
					mentalement. <br />
					<br />
					La méthode Loczy implique donc de laisser l&apos;enfant découvrir seul
					son environnement. Pour le développement du bébé, ce dernier est ainsi
					laissé libre de ses mouvements. L&apos;adulte ne s&apos;efface pas
					pour autant. Son rôle est d&apos;observer, de soutenir,
					d&apos;accompagner et surtout, de lui proposer un cadre sécurisant et
					stimulant pour favoriser son apprentissage. <br />
					<br />
					Tout comme la pédagogie Montessori, la pédagogie Loczy s&apos;appuie
					sur l&apos;observation des nourrissons et sur leur développement, dans
					la petite enfance. Loczy et Montessori ne s&apos;opposent donc pas,
					elles sont même plutôt complémentaires ! <br />
					<b>Les grands principes de la méthode Loczy :</b>
					<br />
					Pour résumer la philosophie Loczy, on pourrait tout simplement dire
					qu&apos;il ne faut pas forcer les choses avec un enfant en bas âge, il
					doit apprendre par lui-même, à son rythme. Son développement va se
					dérouler dans un ordre précis, et de manière naturelle. Au quotidien,
					pour bien appliquer la méthode Loczy, le bébé doit avoir trois aires
					de vie bien définies : <br />
					- Aire du soin (bain, change…) <br />
					- Aire d&apos;activité autonome <br />- Aire du sommeil.
				</p>
				<img
					src={momBaby}
					alt='Main bébé et sa mère'
					loading='lazy'
				/>
			</DiscoverPart>
			<DiscoverPart title="Le plein d'activité en plein air">
				<p>
					Nous nous engageons à mettre les enfants au contact du grand air
					quotidiennement. Notre structure bénéficient d&apos;un jardin privé
					auquel les enfants profitent chaque jour.Le contact avec le grand air
					est indispensable au bon développement cérébral et moteur de
					l&apos;enfant. Les activités proposées en extérieur sont nombreuses.
					Les enfants peuvent courir, sauter ou escalader. La sécurité est
					assurée par des installations et des jeux adaptés à la petite enfance.
					Nos professionnels sont toujours présents sans entraver la liberté
					motrice de chacun. Nos espaces extérieurs sont de la taille nécessaire
					pour permettre à l&apos;enfant d&apos;explorer sans être contraint
					dans ses capacités locomotrices. L&apos;enfant n&apos;est pas non plus
					mis en insécurité par un espace trop vaste ou trop dangereux
					qu&apos;il ne pourrait appréhender de manière autonome.
				</p>
				<img
					src={babyHand}
					alt="Main d'un bébé"
					loading='lazy'
				/>
			</DiscoverPart>
		</div>
	)
}
