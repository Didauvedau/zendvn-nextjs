import Image from '../node_modules/next/image'
import React from 'react'
import Link from '../node_modules/next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowman } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
	let firstName: string = 'Mr.Hung'

	firstName += ' Hero'

	return (
		<div className="container">
			<main className="container mt-5 text-center">
				<div className="d-flex">
					<Link href="/login">
						<button className="btn btn-outline-primary">Login</button>
					</Link>
				</div>
				<Link href="/images/neko-1.jpg">
					<Image src="/images/neko-1.jpg" width={250} height={300} alt="neko" />
				</Link>

				<h1 className="border my-5 p-3">
					Welcome to <a href="https://nextjs.org">Next.js! of {firstName}</a>
				</h1>
				<FontAwesomeIcon icon={faSnowman} />
				<div className="row">
					<h1 className="my-5">Content</h1>
				</div>
				<div className="row">
					<h4>Bottom</h4>
				</div>
			</main>

			<footer className="border-top text-center">
				<h1 className="my-5">footer</h1>
			</footer>
		</div>
	)
}

export default Home
