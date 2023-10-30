import { FormContainer } from '../components'

export { EditProfile }

function EditProfile() {
	return (
		<FormContainer>
			<i className="fa fa-sign-in sign-in-content__icon"></i>
			<h1>Profile</h1>
			<form onSubmit={onSubmit}>
				<div className="input-wrapper">
					<input
						type="text"
						id='form-userName'
						name="userName"
						value="userName"
						//autoComplete='true'
						required
					/>
					<label htmlFor="form-userName">Username</label>
				</div>
				<button className="sign-in-button">Change UserName</button>
			</form>
		</FormContainer>
	)
}