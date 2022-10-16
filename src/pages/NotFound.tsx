import { Link } from 'react-router-dom'

export default () => {
	return (
		<div className='notfound-page'>
			<div className='e404'>404</div>
			<div className='text'>Oups! La page que vous demandez n'existe pas.</div>
			<div className='link'>
				<Link to='/'>Retourner sur la page d’accueil</Link>
			</div>
		</div>
	)
}
