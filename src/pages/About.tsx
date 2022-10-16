import Dropdown from '../components/Dropdown'
import dropdownsData from '../data/about/dropdowns.json'

export default () => {
	return (
		<div className='about-page'>
			<img src='./images/about_bg.png' alt="Image d'un paysage" />
			<div className='about-page__dropdowns'>
				{dropdownsData.map((data, index) => (
					<Dropdown key={index} title={data.title} content={data.content}></Dropdown>
				))}
			</div>
		</div>
	)
}
