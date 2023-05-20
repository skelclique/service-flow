import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/SideBar'

export function DefaultLayout() {
  return (
    <>
      <SideBar />
      <div className="max-w-2xl w-full mx-auto">
        <Outlet />
      </div>
    </>
  )
}
