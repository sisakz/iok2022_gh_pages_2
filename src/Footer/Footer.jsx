import './Footer.scss'
//import HttpLogo from '../assets/img/http-white.png'
import Location from '../icons/Location'
import Phone from '../icons/Phone'
import Mail from '../icons/Mail'
import Web from '../icons/Web'

const Footer = () => {
	return <footer>
		<div className="container">
			<div className='links'>
				<div className='title'>Kapcsolat</div>
				<div className='contact'>
					<Location />1123 Budapest, Csörsz utca 45.
					<Phone/>(1) 225-4702
					<Mail /><div><a href="mailto:info@http-alapitvany.hu">info@http-alapitvany.hu</a></div>
					<Web /><div><a target="_blank" rel="noopener noreferrer" href="https://http-alapitvany.hu">http-alapitvany.hu</a></div>
				</div>
			</div>
			<div className='copyright'>
				Minden jog fenntartva
			</div>
		</div>
	</footer>
}

export default Footer