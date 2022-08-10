import React from 'react'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import Head from '../../../node_modules/next/head'

const AdminUser: React.FC = () => {
	return (
		<>
			<Head>
				<title>User Manager Page</title>
			</Head>
			<div className="container">
				<div className="m-3">
					<h1>Admin {'-->'} User</h1>
				</div>
			</div>
		</>
	)
}

export default AdminUser
