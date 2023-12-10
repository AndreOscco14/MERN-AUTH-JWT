import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useAuth } from "../context/AuthContext"

function HomePage() {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <img src="https://s3.amazonaws.com/media.cloversites.com/36/3687a3f2-ed6b-4355-9e64-ef62cdc42ea7/site-images/a3b792ca-36a5-4229-aea0-be8864868662.png"></img>
    </div>
  )
}

export default HomePage