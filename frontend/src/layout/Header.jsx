import { Link } from 'react-router-dom'
import Logo from '../assets/img/argentBankLogo.png'
export { Header }

function Header() {

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
					<Link to='/register' className="main-nav__item">
						<i className="fa fa-user-circle"></i>
						Register
					</Link>
					<Link to='/signin' className="main-nav__item">
						<i className="fa fa-sign-in"></i>
						Sign In
					</Link>
				</ul>
		</nav>
	)
}



