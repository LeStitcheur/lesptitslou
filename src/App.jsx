//Importations de modules
import { Routes, Route } from 'react-router-dom'

//Importations interne au projet
// Components
import Navigation from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import Discover from './pages/Discover'
import Objectifs from './pages/Objectifs'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import Confidentialite from './pages/Confidentialite'
import Pedagogie from './pages/Pedagogie'
import Siestes from './pages/Siestes'

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
					path='/pedagogie'
					element={<Pedagogie />}
				/>
				<Route
					path='/sieste'
					element={<Siestes />}
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
