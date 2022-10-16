import { ReactNode, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import housesData from '../data/data.json'

type HouseData = {
	id: string
	title: string
	cover: string
	pictures: Array<string>
	description: string
	host: {
		name: string
		picture: string
	}
	rating: string
	location: string
	equipments: Array<string>
	tags: Array<string>
}

export default () => {
	const { id } = useParams()
	const [numPhoto, setNumPhoto] = useState<number>(0)
	const houseData: HouseData | undefined = housesData.find((house) => house.id === id)

	if (!houseData) {
		return <Navigate to='/'></Navigate>
	}

	const stars: Array<ReactNode> = []
	for (let i = 0; i < +houseData.rating; i++) {
		stars.push(
			<span key={i}>
				<i className='fa-solid fa-star'></i>
			</span>
		)
	}
	for (let i = +houseData.rating; i < 5; i++) {
		stars.push(
			<span key={i}>
				<i className='fa-solid fa-star uncoloured'></i>
			</span>
		)
	}

	const handleArrowClick = (direction: string) => {
		if (direction === 'left') {
			setNumPhoto((prev: number) => {
				if (prev === 0) {
					return houseData.pictures.length - 1
				}
				return --prev
			})
		} else if (direction === 'right') {
			setNumPhoto((prev: number) => {
				if (prev === houseData.pictures.length - 1) {
					return 0
				}
				return ++prev
			})
		}
	}

	return (
		<div className='house-page'>
			<div className='house-page__carousel'>
				<img src={houseData.pictures[numPhoto]} alt={houseData.title} />
				<div>{numPhoto + 1 + '/' + houseData.pictures.length}</div>
				{houseData.pictures.length > 1 ? (
					<>
						<span className='arrowleft' onClick={() => handleArrowClick('left')}>
							<i className='fa-solid fa-chevron-left'></i>
						</span>
						<span className='arrowright' onClick={() => handleArrowClick('right')}>
							<i className='fa-solid fa-chevron-right'></i>
						</span>
					</>
				) : null}
			</div>
			<div className='house-page__informations'>
				<div>
					<h2>{houseData.title}</h2>
					<p>{houseData.location}</p>
					<div className='house-page__informations__tags'>
						{houseData.tags.map((tag, index) => (
							<span key={index} className='tag'>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div>
					<div className='house-page__informations__host'>
						<p>{houseData.host.name}</p>
						<img src={houseData.host.picture} alt={houseData.host.name} />
					</div>
					<div className='rating'>{stars}</div>
				</div>
			</div>
			<div className='house-page__dropdowns'>
				<Dropdown title='Description' content={houseData.description}></Dropdown>
				<Dropdown title='Équipements' content={houseData.equipments}></Dropdown>
			</div>
		</div>
	)
}
