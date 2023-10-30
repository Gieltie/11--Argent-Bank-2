import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export { PrivateRoute }

function PrivateRoute() {
	const auth = useSelector(state => state.auth.userInfo)
	return auth ? <Outlet /> : <Navigate to="/signin" replace />
}