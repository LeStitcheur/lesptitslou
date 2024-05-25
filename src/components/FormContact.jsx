// Importation de Modules
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

//Importation CSS
import './../css/formContact.css'

export default function FormContact() {
	const form = useRef()
	const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
	const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
	const api_key = import.meta.env.VITE_EMAILJS_API_KEY
	const [field, setField] = useState({
		nom: '',
		prenom: '',
		mail: '',
		message: '',
	})

	function handleSubmit(evt) {
		evt.preventDefault()

		emailjs
			.sendForm(serviceID, templateID, form.current, {
				publicKey: api_key,
			})
			.then(() => {
				alert('Message envoyé')
				setField({
					nom: '',
					prenom: '',
					mail: '',
					message: '',
				})
			}),
			(error) => {
				console.log('FAILED...', error.text)
			}
	}

	function handleChange(evt) {
		const { name, value } = evt.target
		setField({ ...field, [name]: value })
	}

	return (
		<form
			onSubmit={(evt) => handleSubmit(evt)}
			ref={form}>
			<div className='form-row'>
				<div className='form-row-input'>
					<input
						type='text'
						name='prenom'
						id='prenom'
						placeholder='Votre prénom...'
						value={field.prenom}
						onChange={(evt) => handleChange(evt)}
					/>
				</div>
				<div className='form-row-input'>
					<input
						type='text'
						name='nom'
						id='nom'
						placeholder='Votre nom...'
						value={field.nom}
						onChange={(evt) => handleChange(evt)}
					/>
				</div>
			</div>
			<div className='form-row'>
				<div className='form-row-input'>
					<input
						type='email'
						name='mail'
						id='mail'
						placeholder='Votre email...'
						value={field.mail}
						onChange={(evt) => handleChange(evt)}
					/>
				</div>
			</div>
			<div className='form-row'>
				<div className='form-row-input'>
					<textarea
						name='message'
						id='message'
						placeholder='Votre message...'
						value={field.message}
						onChange={(evt) => handleChange(evt)}></textarea>
				</div>
			</div>
			<div className='form-row'>
				<input
					type='submit'
					value='Envoyer'
				/>
			</div>
		</form>
	)
}
