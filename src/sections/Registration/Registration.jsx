import Button from "../../components/Button/Button"
import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import './Registration.scss'

import { useState } from "react"
import { StructuredText } from "react-datocms"
import { SiteClient } from "datocms-client"
import { AppContext } from "../../App"
import { useContext } from "react"
import Modal from 'react-bootstrap/Modal'
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"
import { useStaticElement, useAllElements } from '../../tools/datoCmsTools'


const Registration = (props) => {

	const context = useContext(AppContext)
	const [allStages] = useAllElements("stages")
	const [registrationText] = useStaticElement("registration") 
	const [registrationFormatText] = useStaticElement("registrationFormat") 
	const [registrationSuccessText] = useStaticElement("registrationSuccess") 
	const [registrationFormatCheckboxText] = useStaticElement("registrationFormatCheckbox", false) 	


	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [onsite, setOnsite] = useState(false)
	const [stage, setStage] = useState(null)

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	const vipCode = (new URLSearchParams(window.location.search)).get('q') || null

	const onSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		setError(false)
		setSuccess(false)
		const client = new SiteClient(context.apiKey)
		try {
			console.log(allStages, {
				itemType: '1843571',
				name,
				email,
				onsite,
				stage
			})
			await client.items.create({
				itemType: '1843571',
				name,
				email,
				onsite,
				stage,
				vipCode
			})
			setSuccess(true)
			setError(false)
			setEmail('')
			setName('')
			setOnsite(false)
			setStage(null)
			if (vipCode) window.history.replaceState({}, document.title, window.location.pathname + window.location.hash)
		} catch (error) {
			console.log(error)
			if (error.statusCode === 422) {
				if (error.message.includes('VALIDATION_UNIQUE')) {
					if (error.message.includes("email")) setError("email")
					else if (error.message.includes("vip_code")) setError("vip")
					else setError("other")
				} else if (error.message.includes("INVALID_FIELD")) {
					if (error.message.includes("vip_code")) setError("vip")
					else setError("other")
				} else {
					setError("other")
				}
			} else {
				setError("other")
			}
		} finally {
			setLoading(false)
		}

	}


	return <Section id="regisztracio" container placeholder>
		<Title>Biztosítsd már most a <span className="highlight text-uppercase">helyed</span>!</Title>
		<Text subtitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet illum veritatis facilis asperiores. Facere, a enim. Earum suscipit totam quod quis maxime non alias!</Text>
		<form className="reg-form" onSubmit={onSubmit}>
			<Title subtitle>Add meg az adataidat</Title>

			<Alert variant="success" show={vipCode && error !== "vip"}>
				VIP regisztrációs kód aktiválva
			</Alert>

			
			<label className="form-label" for="name-field">Név*</label>
			<input id="name-field" className="form-control" value={name} onChange={e => setName(e.target.value)} autoComplete="name" required/>

			<label className="form-label" for="email-field">E-mail cím*</label>
			<input id="email-field" className="form-control" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required/>

			<Alert variant="danger" show={error === "email"}>
				Ez az e-mail cím már foglalt.
			</Alert>

			<label className="form-label">Miyen módon szeretnél részt venni a konferencián?*</label>
			<StructuredText data={registrationFormatText} />
			<div className="form-check">
				<input className="form-check-input" type="checkbox" name="online" id="onsite-field" checked={onsite} onChange={e => setOnsite(e.target.checked)}/>
				<label className="form-check-label" for="onsite-field">
					{registrationFormatCheckboxText}
				</label>
			</div>
			{ onsite && 
				<>
					<label className="form-label  mt-4">Melyik délutáni szekción szeretnél részt venni?*</label>
					<select className="form-select" required={onsite} value={stage} onChange={e => setStage(e.target.value)}>
						<option value={null} hidden selected></option>
						{ allStages?.slice(1).map(stage => <option value={stage.id}>{stage.name}</option>) }
					</select>
				</>
			}

			<div className="my-4"/>

			<Alert variant="danger" show={error === "other"}>
				Ismeretlen hiba történt a jelentkezés során. Kérlek, próbáld újra később.
			</Alert>
			
			<Alert variant="danger" show={error === "vip"}>
				Érvénytelen VIP regisztrációs kód.
			</Alert>

			<Button submit>
				{ loading &&
				<div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)' }}>
					<Spinner
						as="span"
						animation="border"
						role="status"
						aria-hidden="true"
					/>
				</div>
				}
				<span style={{opacity: loading ? 0 : 1}}>Regisztráció</span>
			</Button>
		</form>


		<Modal show={success} onHide={() => {setSuccess(false)}} centered>
			<Modal.Header>
				<Modal.Title>Sikeres jelentkezés!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<StructuredText data={registrationSuccessText} />
			</Modal.Body>
			<Modal.Footer>
			<Button variant="primary" onClick={() => setSuccess(false)}>
				Bezárás
			</Button>
			</Modal.Footer>
		</Modal>
	</Section>
}

export default Registration