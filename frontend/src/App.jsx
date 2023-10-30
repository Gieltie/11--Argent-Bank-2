import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
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
