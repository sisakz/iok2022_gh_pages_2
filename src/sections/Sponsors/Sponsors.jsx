import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import './Sponsors.scss'
import telekomLogo from "../../assets/img/sponsors/Telekom.png"
import microsoftLogo from "../../assets/img/sponsors/ms-logo_HU.png"
import ciscoLogo from "../../assets/img/sponsors/cisco.png"
import pannonLogo from "../../assets/img/sponsors/pannon-mik.png"
import { useStaticElement } from '../../tools/datoCmsTools'
import { StructuredText  } from "react-datocms"

const Sponsor = (props) => {
	return <a href={props.link} target="_blank" rel="noopener noreferrer" className="sponsor"><img src={props.image} alt={props.name} /></a>
}

const Sponsors = () => {
	const [sponsorText] = useStaticElement("sponsor") 
	return <Section container placeholder id="tamogatok">
		<Title>Az IOK 2022 <span className="highlight">TÁMOGATÓI</span></Title>
		<Text description><StructuredText data={sponsorText}></StructuredText></Text>
		<h3>A rendezvény fő támogatói</h3>
		<div className="sponsor-grid main-sponsors">
			<Sponsor image={microsoftLogo} link="https://microsoft.hu" />
			<Sponsor image={telekomLogo} link="https://telekom.hu" />
		</div>
		<h3>Együttműködő partnerek</h3>
		<div className="sponsor-grid partner-sponsors">
			<Sponsor image={ciscoLogo} link="http://cisco.hu" />
			<Sponsor image={pannonLogo} link="https://mik.uni-pannon.hu/" />
		</div>
		{/* <div className="sponsor-grid">
			{(Array(8).fill(1)).map((k,i) => <Sponsor key={i} image="/assets/img/sponsors/google.png" />)}
		</div> */}
	</Section>
}

export default Sponsors