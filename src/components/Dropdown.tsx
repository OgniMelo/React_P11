type DropdownProps = {
	title: string
	content: string | Array<string>
}

export default ({ title, content }: DropdownProps) => {
	const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
		const infosElement: HTMLElement = event.currentTarget.nextSibling as HTMLElement
		const displayed: boolean = infosElement.style.display !== '' && infosElement.style.display !== 'none'
		if (!displayed) {
			event.currentTarget.classList.add('opened')
			infosElement.style.display = 'inherit'
			return
		}
		event.currentTarget.classList.remove('opened')
		infosElement.style.display = 'none'
	}

	return (
		<div className='dropdown'>
			<div onClick={toggleMenu}>
				<span>{title}</span>
				<i className='fa-solid fa-chevron-down'></i>
			</div>
			<div>{typeof content === 'string' ? <p>{content}</p> : content.map((line, index) => <p key={index}>{line}</p>)}</div>
		</div>
	)
}
