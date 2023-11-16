import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FormContainer, Spinner } from '../components'
import { reset, register } from '../features/auth/authSlice'

function Signup() {
	const [formData, setFormData] = useState({
		email: '',
    password: '',
    password2: '',
    firstName: '',
    lastName: '',
    userName: '',
  })

  const { email, password, password2, firstName, lastName, userName } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
		const customId = "custom-id-yes";

    if (isError) {
      toast.error(user)
    }

    if (isSuccess || user) {
			toast.success(message, {
				toastId: customId
			})
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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
				email,
        password,
        password2,
        firstName,
        lastName,
        userName,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

	return (
		<FormContainer>
			<i className="fa fa-user-circle signup-content__icon"></i>
			<h1>Signup</h1>
			<form onSubmit={onSubmit}>
				<div className="input-wrapper">
					<input
						type="text"
						id='form-email'
						name="email"
						value={email}
						onChange={onChange}
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
						onChange={onChange}
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
						onChange={onChange}
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
						onChange={onChange}
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
						onChange={onChange}
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
						onChange={onChange}
						autoComplete='true'
						required
					/>
					<label htmlFor="form-userName">User Name</label>
				</div>
				<button className='signup-button button'>Signup</button>
				<p>Already have an account? <br /><Link to='/login'>Sign In</Link></p>
			</form>
		</FormContainer>
	)
}

export { Signup }