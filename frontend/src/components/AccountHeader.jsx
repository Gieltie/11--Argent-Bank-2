import { Link } from "react-router-dom"

export { AccountHeader }

function AccountHeader({ firstName, lastName }) {
	return (
		<div className="header">
			<h1>Welcome back<br />{firstName} {lastName}!</h1>
			<Link to='/profile' className="edit-button">
				<button className="edit-button">Edit Name</button>
			</Link>
		</div>
	)
}