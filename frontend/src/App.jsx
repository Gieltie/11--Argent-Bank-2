import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header, Footer } from './components'
import './App.scss'
import "react-toastify/dist/ReactToastify.css"

export { App }

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer 
        position='bottom-left' 
        autoClose={5000}
        hideProgressBar={false}
        closeButton={false}
        newestOnTop={true}
        limit={1}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  )
}
