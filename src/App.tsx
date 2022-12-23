import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './routes'

export default () => {
	return (
		<Router>
			<Navbar />
			<Routes></Routes>
			<Footer />
		</Router>
	)
}
