import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { FormContainer } from '../components'
import { useLoginMutation, useUserDataMutation} from '../slices/usersApiSlice'
import { setCredentials, setUserProfile} from '../slices/authSlice'

export { SignIn }

function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [remember, setRemember] = useState(false)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [login, { isLoading }] = useLoginMutation()
	const [fetchProfile] = useUserDataMutation()

	const getUserProfile = async () => {
    const getToken = JSON.parse(localStorage.getItem('userInfo'))
    if (getToken) {
      const token = getToken.body.token
      try {
        const res = await fetchProfile(token).unwrap()
        dispatch(setUserProfile({ ...res }))
        navigate('/user')
      } catch (err) {
        toast.error(err?.data?.message || err?.error)
      }
    }
  }

	const { userInfo } = useSelector((state) => state.auth)

	useEffect(() => {
		if (userInfo) {
			getUserProfile()
			navigate('/user')
		}
	}, [navigate, userInfo])

	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await login({ email, password }).unwrap()
			dispatch(setCredentials({ ...res }))
			toast.success(res.message)
			navigate('/user')
		} catch (err) {
			toast.error(err?.data?.message || err.error)
		}
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
				<button className="sign-in-button">{isLoading ? <span>Loading...</span> : <span>Sign In</span>}</button>
				<p>New customer? <Link to='/register'>Register</Link></p>
			</form>
		</FormContainer>
	)
}