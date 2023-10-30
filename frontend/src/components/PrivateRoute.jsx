import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export { PrivateRoute }

function PrivateRoute() {
	const auth = useSelector(state => state.auth.user)
	return auth ? <Outlet /> : <Navigate to="/login" replace />
}