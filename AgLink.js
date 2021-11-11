import React from 'react'

function AgLink(props) {
	const { to, path, comp, children, className } = props

	const handleClick = () => {
		console.log('Link Clicked')
	}
	return (
		<a
			href={path ? path : to.pathname}
			target='_blank'
			className={className}
			style={{ textDecoration: 'none' }}
			onClick={handleClick()}>
			{comp ? comp : children}
		</a>
	)
}

export default AgLink