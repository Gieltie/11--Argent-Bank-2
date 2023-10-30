import { Outlet } from 'react-router-dom'
import { Header, Footer } from './layout'
import './App.scss'

export { App }

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
