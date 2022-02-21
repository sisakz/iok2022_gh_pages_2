import './Text.scss'

const Text = (props) => {
	return <p className={`text ${props.center && 'center'} ${props.subtitle && 'subtitle'} ${props.description && 'description'}`}>{props.children}</p>
}

export default Text