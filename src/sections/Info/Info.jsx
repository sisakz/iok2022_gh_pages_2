import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import Bubble from "../../components/Bubble/Bubble"
import "./Info.scss"
import LightBulb from "../../icons/LightBulb"
import Networking from "../../icons/Networking"
import Star from "../../icons/Star"
import Tools from "../../icons/Tools"
import { StructuredText  } from "react-datocms"

const Info = (props) => {
	const{ infoText1, infoText2 } = props
	return <Section container placeholder id="info-section">
		<Title>Legyünk ismét <span className="highlight">EGYÜTT</span>!</Title>
		<Text subtitle><StructuredText data={infoText1}/></Text>

		<div className='row'>
				<div className='col-md-6 col-12'>
					<div className='bubbles'>
						<Bubble icon color='primary' size='extra-large' title={<LightBulb />} subtitle="Inspiráció" corners={['bottom-right']} />
						<Bubble icon color='light' size="large" title={<Networking />} subtitle="Hálózat" corners={['bottom-left']} />
						<Bubble icon color='light' size="large" title={<Star />} subtitle="Eredmény" corners={['top-right']} />
						<Bubble icon color='light' size="large" title={<Tools />} subtitle="Tudás" corners={['top-left']} />
					</div>
				</div>
				<div className='col-md-6 col-12'>
					<Title subtitle>Töltődj fel a legfrisebb információkkal</Title>
					<Text>
						<StructuredText data={infoText2}/>
					</Text>
				</div>
			</div>
	</Section>
}

export default Info