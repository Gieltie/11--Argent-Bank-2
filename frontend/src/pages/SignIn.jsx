import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormContainer } from '../components'

export { SignIn }

function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [remember, setRemember] = useState(false)

	const onSubmit = async (e) => {
		e.preventDefault()
	}

	return (
		<FormContainer>
			<i className="fa fa-sign-in sign-in-content__icon"></i>
			<h1>Sign In</h1>
			<form onSubmit={onSubmit}>
				<div className="input-wrapper">
					<input
						type="email"
						id='form-email'
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						//autoComplete='true'
						required
					/>
					<label htmlFor="form-email">Username</label>
				</div>
				<div className="input-wrapper">
					<input
						type='password'
						id='form-password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<label htmlFor="form-password">Password</label>
				</div>
				<div className="input-remember">
					<input
						type="checkbox"
						id="form-checkbox"
						name="rememberMe"
						onChange={() => setRemember(!remember)}
						checked={remember}
					/>
					<label htmlFor="form-checkbox">Remember me</label>
				</div>
				<button className="sign-in-button">Sign In</button>
				<p>New customer? <Link to='/register'>Register</Link></p>
			</form>
		</FormContainer>
	)
}