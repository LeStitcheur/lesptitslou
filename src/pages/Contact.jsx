// Importation de Modules

// Importation CSS
import './../css/contact.css'
import FormContact from '../components/FormContact'

export default function Contact() {
	return (
		<div className='contact'>
			<div className='contact__header'>
				<h2>Contact</h2>
				<h3>Nous joindre</h3>
				<p>
					Pour toute demande d&apos;information, n&apos;hésitez pas à nous
					contacter. Nous vous répondrons avec plaisir.
				</p>
			</div>
			<div className='contact__body'>
				<div className='contact__body__infos'>
					<div className='contact__body__infos__card'>
						<box-icon
							name='map'
							color='#3d9be9'
							size='md'></box-icon>
						<h4>Adresse</h4>
						<span>41 Boucle de la Tuilerie</span>
						<span>57970 Yutz France</span>
					</div>
					<div className='contact__body__infos__card'>
						<box-icon
							name='phone'
							color='#3d9be9'
							size='md'></box-icon>
						<h4>Téléphone</h4>
						<span>07 85 91 98 08</span>
					</div>
					<div className='contact__body__infos__card'>
						<box-icon
							name='envelope'
							color='#3d9be9'
							size='md'></box-icon>
						<h4>Email</h4>
						<span>les.ptitslou57@gmail.com</span>
					</div>
					<div className='contact__body__infos__card'>
						<box-icon
							name='like'
							color='#3d9be9'
							size='md'></box-icon>
						<h4>Réseaux sociaux</h4>
						<div className='icons'>
							<a href='https://www.facebook.com/profile.php?id=61557507543860'>
								<box-icon
									name='facebook-square'
									type='logo'
									color='#f37a17'
									size='md'></box-icon>
							</a>
							<a href='https://www.instagram.com/lesptitslou57/'>
								<box-icon
									name='instagram'
									type='logo'
									color='#f37a17'
									size='md'></box-icon>
							</a>
						</div>
					</div>
				</div>
				<div className='contact__body__form'>
					<FormContact />
				</div>
			</div>
			<div className='contact__footer'>
				<div className='contact__footer__map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.2270539924148!2d6.203835912221553!3d49.36677657128642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47953b51f8bc5c71%3A0xe99dd45ef4e99b2d!2s41%20Bcle%20de%20la%20Tuilerie%2C%2057970%20Yutz!5e0!3m2!1sfr!2sfr!4v1716402965262!5m2!1sfr!2sfr'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</div>
		</div>
	)
}
