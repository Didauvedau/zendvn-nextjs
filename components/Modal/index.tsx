import React, { useEffect, useRef, useState } from 'react'

//khai bao kieu cho props
type ModalProps = {
	isVisible?: boolean
}

const Index: React.FC<ModalProps> = ({ isVisible }) => {
	const changeClass = isVisible ? 'd-block' : 'd-none'

	return (
		<div className={`border w-25 text-center p-3 ${changeClass}`}>
			Modal
		</div>
	)
}

export default Index
