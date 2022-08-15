import React, { useEffect } from 'react'
import { useRouter } from '../../../node_modules/next/router'
import Link from '../../../node_modules/next/link'

//Demo Client Side Rendering nên sẽ chạy 2 lần để lấy dữ liệu sau khi xử lý trong functional component
const AdminUserId: React.FC = () => {
	const router = useRouter()

	console.log(router.query.id)

	const handleGoPost = () => {
		router.push('/admin/posts')
	}

	return (
		<div className="container d-flex flex-column">
			<h1>
				Admin {'-->'} User {'-->'} {router.query.id}
			</h1>
			<button className="btn btn-outline-success w-25" onClick={handleGoPost}>
				To Posts Page
			</button>
			<Link href="/login">
				<a className="text-decoration-none m-3">Link to Login</a>
			</Link>
		</div>
	)
}
//Data Fetching --> Sever Side Rendering: lấy ngay đc param

export default AdminUserId
