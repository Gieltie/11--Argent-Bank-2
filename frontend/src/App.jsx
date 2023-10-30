import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import { ToastContainer } from 'react-toastify'
import './App.scss'
import "react-toastify/dist/ReactToastify.css"

export { App }

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}
