import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Logo from '../assets/img/argentBankLogo.png'

export { Header }

function Header() {
	const { user } = useSelector((state) => state.auth)
	const { userProfile } = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/');
	};

	return (
		<nav className="main-nav">
			<Link to='/' className="main-nav__logo">
				<img
					className="main-nav__logo--image"
					src={Logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<ul>
				<li>
					{ userProfile ? 
						<Link to='/user' className="main-nav__item">
								<i className="fa fa-user-circle"></i>
								{userProfile.body.userName}
						</Link> 
						: 
						<Link to='/signup' className="main-nav__item">
							<i className="fa fa-user-circle"></i>
							Signup
						</Link>
					}
				</li>
				<li>
					{ user ?
						<Link to='/' className="main-nav__item" onClick={onLogout}>
							<i className="fa fa-sign-out"></i>
							Sign out
						</Link>
						:
						<Link to='/login' className="main-nav__item">
							<i className="fa fa-sign-in"></i>
							Sign In
						</Link>
					}
				</li>
			</ul>
		</nav>
	)
}