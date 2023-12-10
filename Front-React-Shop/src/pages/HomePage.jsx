import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useAuth } from "../context/AuthContext"

import { Link } from "react-router-dom"

function HomePage() {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <div> 
      <p> HomePage</p>
    </div>
  )
}

export default HomePage