import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header, Footer } from './components'
import './App.scss'
import "react-toastify/dist/ReactToastify.css"

export { App }

function App() {
  console.log("teste")
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer 
        position='bottom-left' 
        autoClose={3000}
        hideProgressBar={true}
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
