import './../css/footer.css'

import audio from './../assets/songs/song.mp3'
import Player from './Player'

export default function Footer() {
	return (
		<footer>
			<Player audioFile={audio} />
			<div className='links'>
				<a href='mailto:les.ptitslou57@gmail.com'>les.ptitslou57@gmail.com</a>
				<a href='/mentions'>Mentions Légales</a>
				<a href='/confidentialite'>Politique de confidentialité</a>
			</div>
			<p>
				&copy; Les P&apos;tits Lou | 2024 | Développé par
				<a href='https://www.mywebsoluce.fr'>MyWebSoluce</a>
			</p>
		</footer>
	)
}
