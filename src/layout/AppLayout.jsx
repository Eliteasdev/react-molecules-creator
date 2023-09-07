import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function AppLayout () {
  return (
    <div className="flex flex-col gap-3 bg-slate-900 h-screen py-4 px-3 items-center">
      <NavBar />
      <Outlet />
    </div>
  )
}
