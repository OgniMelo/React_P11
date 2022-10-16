import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default () => {
	return (
		<div className='navbar'>
			<Link to='/'>
				<h1>
					<img id='logo' src={logo} alt='' />
				</h1>
			</Link>
			<nav>
				<ul>
					<li>
						<Link to='/'>Accueil</Link>
					</li>
					<li>
						<Link to='/about'>A Propos</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
