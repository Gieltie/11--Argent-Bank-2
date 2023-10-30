import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { FormContainer } from '../components'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'

export { Register }

function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { userInfo } = useSelector((state) => state.auth)

	const [register, { isLoading }] = useRegisterMutation()

	useEffect(() => {
		if (userInfo) {
			navigate('/user')
		}
	}, [navigate, userInfo])

	const onSubmit = async (e) => {
		e.preventDefault()
		if (password !== password2) {
			toast.error('Passwords do not match')
		} else {
			try {
				const res = await register({ email, password, password2, firstName, lastName, userName, }).unwrap()
				dispatch(setCredentials({ ...res }))
				toast.success(res.message)
				navigate('/user')
			} catch (err) {
				toast.error(err?.data?.message || err.error)
			}
		}
	}

	return (
		<FormContainer>
			<i className="fa fa-user-circle register-content__icon"></i>
			<h1>Register</h1>
			<form onSubmit={onSubmit}>
				<div className="input-wrapper">
					<input
						type="text"
						id='form-email'
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete='false'
						required
					/>
					<label htmlFor="form-email">E-mail</label>
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
				<div className="input-wrapper">
					<input
						type='password'
						id='form-password2'
						name='password2'
						value={password2}
						onChange={(e) => setPassword2(e.target.value)}
						required
					/>
					<label htmlFor="form-password2">Confirm Password</label>
				</div>
				<div className="input-wrapper">
					<input
						type='text'
						id='form-firstName'
						name='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						autoComplete='true'
						required
					/>
					<label htmlFor="form-firstName">First Name</label>
				</div>
				<div className="input-wrapper">
					<input
						type='text'
						id='form-lastName'
						name='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						autoComplete='true'
						required
					/>
					<label htmlFor="form-lastName">Last Name</label>
				</div>
				<div className="input-wrapper">
					<input
						type='text'
						id='form-userName'
						name='userName'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						autoComplete='true'
						required
					/>
					<label htmlFor="form-userName">User Name</label>
				</div>
				<button className='register-button'>{isLoading ? <span>Loading...</span> : <span>Register</span>}</button>
				<p>Already have an account? <br /><Link to='/signin'>Sign In</Link></p>
			</form>
		</FormContainer>
	)
}