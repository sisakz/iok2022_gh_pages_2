import Info from '../sections/Info/Info'
import Map from '../sections/Map/Map'
import Overlay from '../sections/Overlay/Overlay'
import Presenters from '../sections/Presenters/Presenters'
import Registration from '../sections/Registration/Registration'
import Schedule from '../sections/Schedule/Schedule'
import Sponsors from '../sections/Sponsors/Sponsors'
import Welcome from '../sections/Welcome/Welcome'
import './Main.scss'
import { useQuerySubscription  } from "react-datocms";

const DATOCMS_QUERY = `
query AppQuery {
	allSpeakers(
		orderBy: [name_ASC]) {
			name
		slug
		highlighted
		title
		company
		image {
			url
		}
	}
	staticelement  {
		welcome {
				value 
			}
		info1 {
			value 
		}
		info2 {
			value 
		}
		speaker {
			value
		}
		map1 {
			value
		}		
		map2 {
			value
		}	
		sponsor {
			value
		}		
		registration {
			value
		}		
	}
	allStages(orderBy: [order_ASC]) {
		name
		schedule {
			id
			start
			title
			speaker {
				id
				company
				name
				title
				image {
					url
				}
			}
		}
	}
}`

const Main = () => {
    const { error, data } = useQuerySubscription({
        enabled: true,
        query: DATOCMS_QUERY,
        token: "3331fc3477e7df4b7cb85836c2a684",
    });

	const welcomeText = data?.staticelement.welcome.value
	const infoText1 = data?.staticelement.info1.value
	const infoText2 = data?.staticelement.info2.value
	const presenterText = data?.staticelement.speaker.value
	const mapText1 = data?.staticelement.map1.value
	const mapText2 = data?.staticelement.map2.value
	const sponsorText = data?.staticelement.sponsor.value
	const registrationText = data?.staticelement.registration.value 
	const allPresenters = data?.allSpeakers
	const allStages = data?.allStages

	return <main>
		<Welcome welcomeText={welcomeText}/>
 		<Overlay />
		<Info infoText1={infoText1} infoText2={infoText2} />
		<Presenters presenterText={presenterText} allPresenters={allPresenters}/>
		<Schedule allStages={allStages} />
		<Map mapText1={mapText1} mapText2={mapText2}/>
		<Sponsors sponsorText={sponsorText}/>
		<Registration resistrationText={registrationText}/>
 	</main>
}

export default Main