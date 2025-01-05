import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'

import Workouts from './pages/Workouts'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Onboarding from './pages/Onboarding'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}  />
    </>
  )
}

export default App
