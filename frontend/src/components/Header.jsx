import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../assets/img/argentBankLogo.png'
import { removeCredentials } from '../slices/authSlice'
export { Header }

function Header() {
	const { userInfo } = useSelector((state) => state.auth)
	//const { userProfile } = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onLogout = () => {
		dispatch(removeCredentials());
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
			{userInfo ?
				<ul>
					<Link to='/user' className="main-nav__item">
						<i className="fa fa-user-circle"></i>
						{/* {userProfile} */}
					</Link>
					<Link to='/' className="main-nav__item" onClick={onLogout}>
						<i className="fa fa-sign-out"></i>
						Sign out
					</Link>
				</ul>
				:
				<ul>
					<Link to='/register' className="main-nav__item">
						<i className="fa fa-user-circle"></i>
						Register
					</Link>
					<Link to='/signin' className="main-nav__item">
						<i className="fa fa-sign-in"></i>
						Sign In
					</Link>
				</ul>
			}
		</nav>
	)
}



