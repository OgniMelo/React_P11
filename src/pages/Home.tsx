import Card from '../components/Card'
import housesData from '../data/data.json'

export default () => {
	return (
		<div className='home-page'>
			<div>
				<img src='./images/home_bg.png' alt='' />
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<div className='home-page__list'>
				{housesData.map((house) => (
					<Card key={house.id} id={house.id} title={house.title} cover={house.cover}></Card>
				))}
			</div>
		</div>
	)
}
