import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import House from './pages/House'
import NotFound from './pages/NotFound'

export default () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/house/:id' element={<House />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
