import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import './Sponsors.scss'

const Sponsor = (props) => {
	return <a href={props.link} target="_blank" rel="noopener noreferrer" className="sponsor"><img src={props.image} alt={props.name} /></a>
}

const Sponsors = () => {
	return <Section container placeholder id="tamogatok">
		<Title>Az IOK 2022 <span className="highlight">TÁMOGATÓI</span></Title>
		<Text subtitle>A mostani rendezvényünk sem jöhetett volna létre az informatika oktatás iránt elkötelezett partnereink együttműködése és támogatása nélkül.</Text>
		<h3>A rendezvény fő támogatói</h3>
		<div className="sponsor-grid main-sponsors">
			<Sponsor image="/assets/img/sponsors/ms-logo_HU.png" link="https://microsoft.hu" />
			<Sponsor image="/assets/img/sponsors/Telekom.png" link="https://telekom.hu" />
		</div>
		<h3>Együttműködő partnerek</h3>
		<div className="sponsor-grid partner-sponsors">
			<Sponsor image="/assets/img/sponsors/cisco.png" link="http://cisco.hu" />
			<Sponsor image="/assets/img/sponsors/pannon-mik.png" link="https://mik.uni-pannon.hu/" />
		</div>
		{/* <div className="sponsor-grid">
			{(Array(8).fill(1)).map((k,i) => <Sponsor key={i} image="/assets/img/sponsors/google.png" />)}
		</div> */}
	</Section>
}

export default Sponsors