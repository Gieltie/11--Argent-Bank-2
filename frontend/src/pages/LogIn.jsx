import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FormContainer, Spinner } from '../components'
import { login, reset } from '../features/auth/authSlice'
import { getProfile } from '../features/userProfile/userProfileSlice'

export { LogIn }

function LogIn() {
	const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
	const [remember, setRemember] = useState(false)

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
		const customId = "custom-id-yes";

    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
			toast.success(user.message, {
				toastId: customId
			})
			dispatch(getProfile())
      navigate('/user')
    }
		
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])
	
  const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
      [e.target.name]: e.target.value,
    }))
  }
	
  const onSubmit = (e) => {
		e.preventDefault()
		
    const userData = {
			email,
      password,
    }
		
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
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
						onChange={onChange}
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
						onChange={onChange}
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
				<p>New customer? <Link to='/signup'>Signup</Link></p>
			</form>
		</FormContainer>
	)
}