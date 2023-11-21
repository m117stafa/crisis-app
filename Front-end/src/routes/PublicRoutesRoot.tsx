
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PublicRoutesRoot = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default PublicRoutesRoot