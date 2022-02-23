import React from 'react'
import './App.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

export const AppContext = React.createContext<undefined | {apiKey: string}>(undefined)

function App() {

	return (
		<AppContext.Provider value={{
			apiKey: "20bfbb74097b060d8cfbfd74a60413"
		}}>
			<Header />
			<Main />
			<Footer />
		</AppContext.Provider>
	)
}

export default App
