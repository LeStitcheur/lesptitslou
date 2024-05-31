import './../css/footer.css'

import audio from './../assets/songs/song.mp3'
import Player from './Player'

export default function Footer() {
	return (
		<footer>
			<Player audioFile={audio} />
			<div className='links'>
				<a href='mailto:les.ptitslou57@gmail.com'>
					<b>►</b>les.ptitslou57@gmail.com<b>◄</b>
				</a>
				<a href='/mentions'>
					<b>►</b>Mentions Légales<b>◄</b>
				</a>
				<a href='/confidentialite'>
					<b>►</b>Politique de confidentialité<b>◄</b>
				</a>
			</div>
			<p>
				&copy; Les P&apos;tits Lou | 2024 | Développé par
				<a href='https://www.mywebsoluce.fr'>MyWebSoluce</a>
			</p>
		</footer>
	)
}
