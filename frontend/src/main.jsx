import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { App } from './App.jsx'
import { PrivateRoute } from './components'
import { Home, LogIn, Signup, User, Error } from './pages'
import { store } from './store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route element={<PrivateRoute />}>
        <Route path="/user" element={<User />}></Route>
      </Route>
      <Route index={true} path="/" element={<Home />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
