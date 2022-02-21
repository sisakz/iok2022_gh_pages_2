import Button from "../../components/Button/Button"
import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import './Registration.scss'

const Registration = () => {
	return <Section id="regisztracio" container placeholder>
		<Title>Biztosítsd már most a <span className="highlight text-uppercase">helyed</span>!</Title>
		<Text subtitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet illum veritatis facilis asperiores. Facere, a enim. Earum suscipit totam quod quis maxime non alias!</Text>
		<form className="reg-form">
			<Title subtitle>Add meg az adataidat</Title>

			<input className="form-control" placeholder="Név" />
			<input className="form-control" placeholder="Email" />
			<input className="form-control" placeholder="Telefon" />
			<textarea className="form-control" placeholder="Üzenet" rows={5}></textarea>
			<Button glow>Regisztráció</Button>
		</form>
	</Section>
}

export default Registration