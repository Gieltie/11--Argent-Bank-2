import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx'
import { Home, SignIn, Register, User, EditProfile, Error } from './pages'
import { PrivateRoute } from './components'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route element={<PrivateRoute />}>
        <Route path="/user" element={<User />}></Route>
        <Route path="/edit" element={<EditProfile />}></Route>
      </Route>
      <Route index={true} path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
