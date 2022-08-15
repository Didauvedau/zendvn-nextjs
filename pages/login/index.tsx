import React, { useEffect } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faAtom } from '@fortawesome/free-solid-svg-icons'

const Index: React.FC = () => {
	useEffect(() => {
		document.title = 'Login Page'
	},[])

	return (
		<div className="container">
			<Link href="/">
				<a>
					<button className="mt-5 btn btn-outline-primary m-3">Back To Home</button>
				</a>
			</Link>
			<div className="wrapper">
				<div className="logo">
					<FontAwesomeIcon icon={faAtom} />
				</div>
				<div className="text-center mt-4 name">Login</div>
				<form className="p-3 mt-3">
					<div className="form-field d-flex align-items-center">
						<span className="far fa-user">
							<FontAwesomeIcon icon={faUser} />
						</span>
						<input type="text" name="userName" id="userName" placeholder="Username" />
					</div>
					<div className="form-field d-flex align-items-center">
						<span className="fas fa-key">
							<FontAwesomeIcon icon={faKey} />
						</span>
						<input type="password" name="password" id="pwd" placeholder="Password" />
					</div>
					<button className="btn mt-3">Login</button>
				</form>
				{/* <div className="text-center fs-6">
					<a href="#">Forget password?</a> or <a href="#">Sign up</a>
				</div> */}
			</div>
		</div>
	)
}

export default Index
