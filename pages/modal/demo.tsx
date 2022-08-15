import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal'

const Demo: React.FC = () => {
	const [openModal, setOpenModal] = useState<boolean>(false)

	useEffect(() => {
		document.title = 'Modal Component'
	}, [openModal])

	return (
		<div className="container m-5">
			<Modal isVisible={openModal}></Modal>
			<button className="btn btn-outline-primary my-5" onClick={() => setOpenModal(!openModal)}>
				Open Modal
			</button>
		</div>
	)
}

export default Demo
