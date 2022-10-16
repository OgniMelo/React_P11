import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import House from './pages/House'
import NotFound from './pages/NotFound'

export default () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/house/:id' element={<House />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	)
}
