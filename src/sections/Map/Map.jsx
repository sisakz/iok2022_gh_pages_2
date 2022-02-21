import Section from "../../components/Section/Section"
import "./Map.scss"
import Title from "../../components/Title/Title"
import Text from "../../components/Text/Text"


const Map = () => {
	return <Section id="helyszin" container placeholder>
		<Title>Konferencia <span className="highlight">HELYSZÍN</span></Title>
		<Text description>Válaszd meg, hogy a helyszínen szeretnéd-e követni az IOK 2022 szakmai programját vagy inkább az otthonod kényelméből, online kapcsolódva!
		A konferencia helyszínén sajnos legfeljebb 150 vendéget tudunk személyesen fogadni, de szerencsére az online konferenciatér befogadóképessége korlátlan. Ha a személyes résztvevők között vagy, akkor ide várunk:</Text>
		<img className="map" src="/assets/img/map.png" alt="Térkép" />
		<Text description>Magyar Telekom Székház Konferenciaközpont - 1097 Budapest, Könyves Kálmán krt. 36.</Text>
	</Section>
}

export default Map