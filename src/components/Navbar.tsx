import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default () => {
	return (
		<div className='navbar'>
			<NavLink to='/'>
				<h1>
					<img id='logo' src={logo} alt='' />
				</h1>
			</NavLink>
			<nav>
				<ul>
					<li>
						<NavLink to='/' end>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink to='/about'>A Propos</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}
