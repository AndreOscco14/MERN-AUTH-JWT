import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function NavBar() {


  const { isAuthenticated, logout, user } = useAuth()



  return (
    <nav className="bg-gray-800 mb-3 flex justify-between py-5 px-10">
    <Link to='/'>
     <h1 className="text-2xl font-bold">Tasks Manager</h1>
    </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? ( 
          <>
            <li>
             Hi: {user.username} !
            </li>
            <li>
              <Link to='/add-task'
                className="bg-gray-600 px-4 py-1 rounded-lg"
              >
              New Task</Link>
            </li>
            <li>
              <Link to='/tasks'
                className="bg-gray-600 px-4 py-1 rounded-lg"
              >
              Tasks</Link>
            </li>
            <li>
              <Link to='/' onClick={() => {
                logout()
              }}
              className="bg-gray-600 px-4 py-1 rounded-lg"
              >
                Log Out
              </Link>
            </li>
          </>
          ):(
          <>
            <li>
              <Link to='/login'
               className="bg-gray-600 px-4 py-1 rounded-lg"
              >
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'
                className="bg-gray-600 px-4 py-1 rounded-lg"
              >
              Register</Link>
            </li>
          </>
        )} 
      </ul>
    </nav>
  )
}

export default NavBar