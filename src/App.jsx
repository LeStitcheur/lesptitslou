//Importations de modules
import { Routes, Route } from 'react-router-dom'

//Importations interne au projet
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Objectifs from './pages/Objectifs'
import Contact from './pages/Contact'
import Header from './components/Header'
import Mentions from './pages/Mentions'
import Confidentialite from './pages/Confidentialite'
import Footer from './components/Footer'

//Importation CSS

function App() {
	return (
		<>
			<Header />
			<Navigation />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/decouvrir'
					element={<Discover />}
				/>
				<Route
					path='/objectifs'
					element={<Objectifs />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/mentions'
					element={<Mentions />}
				/>
				<Route
					path='/confidentialite'
					element={<Confidentialite />}
				/>
			</Routes>
			<Footer />
		</>
	)
}

export default App
