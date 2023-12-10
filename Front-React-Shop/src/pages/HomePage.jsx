import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useAuth } from "../context/AuthContext"

function HomePage() {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <div> 
      <p> HomePage</p>
    </div>
  )
}

export default HomePage