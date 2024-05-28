// Importation de Modules
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//Importation CSS
import './../css/formContact.css'

export default function FormContact() {
	const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
	const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
	const api_key = import.meta.env.VITE_EMAILJS_API_KEY

	const wait = function (duration = 1000) {
		return new Promise((resolve) => {
			window.setTimeout(resolve, duration)
		})
	}

	const schema = yup.object().shape({
		prenom: yup.string().required('Vous devez entrer un prénom'),
		nom: yup.string().required('Vous devez entrer un nom'),
		mail: yup
			.string()
			.email("Votre mail n'est pas valide")
			.required('Vous devez entrer un mail valide'),
		message: yup.string().required('Vous devez écrire un message'),
	})

	const {
		register,
		handleSubmit,
		formState,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const { isSubmitting, isSubmitSuccessful } = formState

	const onSubmit = (data) => {
		emailjs
			.send(serviceID, templateID, data, {
				publicKey: api_key,
			})
			.then(() => {
				// console.log('MAIL OK ✅')
				wait(5000)
				reset()
			}),
			(error) => {
				console.log('FAILED ❌', error.text)
			}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='contact-form'>
			{isSubmitSuccessful && (
				<span className='success'>
					Votre mail a bien été envoyé.<br></br> Nous répondrons dans les plus
					bref délais
				</span>
			)}
			<div className='form-row'>
				<div className='form-row-input'>
					<label htmlFor='prenom'>Prénom :</label>
					<input
						type='text'
						name='prenom'
						id='prenom'
						placeholder='John'
						style={
							errors.prenom && {
								border: '2px solid red',
							}
						}
						{...register('prenom')}
					/>
					{errors.prenom && (
						<span className='error'>{errors.prenom.message}</span>
					)}
				</div>
				<div className='form-row-input'>
					<label htmlFor='nom'>Nom :</label>
					<input
						type='text'
						name='nom'
						id='nom'
						placeholder='Doe'
						style={
							errors.nom && {
								border: '2px solid red',
							}
						}
						{...register('nom')}
					/>
					{errors.nom && <span className='error'>{errors.nom.message}</span>}
				</div>
			</div>
			<div className='form-row'>
				<div className='form-row-input'>
					<label htmlFor='mail'>Mail :</label>
					<input
						type='email'
						name='mail'
						id='mail'
						placeholder='johndoe@email.fr'
						style={
							errors.mail && {
								border: '2px solid red',
							}
						}
						{...register('mail')}
					/>
					{errors.mail && <span className='error'>{errors.mail.message}</span>}
				</div>
			</div>
			<div className='form-row'>
				<div className='form-row-input'>
					<label htmlFor='message'>Message :</label>
					<textarea
						name='message'
						id='message'
						placeholder='Votre message'
						style={
							errors.message && {
								border: '2px solid red',
							}
						}
						{...register('message')}></textarea>
					{errors.message && (
						<span className='error'>{errors.message.message}</span>
					)}
				</div>
			</div>
			<div className='form-row'>
				<input
					type='submit'
					value='Envoyer'
					disabled={isSubmitting}
				/>
			</div>
		</form>
	)
}
