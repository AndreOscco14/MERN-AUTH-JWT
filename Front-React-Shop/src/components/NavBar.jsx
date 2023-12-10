import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import guitarUser from '../assets/guitar.png'


function NavBar() {

  const { isAuthenticated, logout, user } = useAuth()

  return (

    <Navbar  className="mb-5 dark:bg-neutral-900">
      <Navbar.Brand href="/" className=''>
        <img  src={guitarUser} className="mr-2 h-12" alt="Flowbite React Logo" />
        <span className="text-gray-500 self-center whitespace-nowrap dark:text-gray-200 text-xl font-semibold">Flowbite React</span>
      </Navbar.Brand>

        {isAuthenticated ? ( 
          <>
          {/* <img src={guitarUser}/>  */}
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline 
              className="dark:bg-neutral-800 shadow-xl"
              label={
                // guitarUser
                <Avatar alt="User settings" className="mr-2 " img="https://png.pngtree.com/png-clipart/20230504/original/pngtree-free-vector-big-green-leaf-of-tropical-monstera-plant-isolated-on-png-image_9139719.png" rounded />
                // <Avatar alt=""  className="dark:bg-gray-200  rounded-full w-9" img={guitarUser}></Avatar>

              }
            >
              <Dropdown.Header className="">
                <span className="block text-sm">Hi {user.username} &hearts;</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>

              <Link to='/add-task' >
                <Dropdown.Item> New Task </Dropdown.Item>
              </Link>
              <Link to='/tasks'>
                <Dropdown.Item>Tasks</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Link to='/' onClick={() => { logout() }}>
                <Dropdown.Item>  Sign Out  </Dropdown.Item>
              </Link>
       
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
              <Link to='/add-task' className="text-gray-800 dark:text-gray-200 ">
                  <Navbar className="dark:bg-neutral-900">New Tasks</Navbar>
              </Link>
              <Link to='/tasks' className="text-gray-800 dark:text-gray-200">
                  <Navbar className=" dark:bg-neutral-900">Tasks</Navbar>
              </Link>
              <Flowbite>
                <DarkThemeToggle></DarkThemeToggle>
              </Flowbite>
          </Navbar.Collapse>
          </>
        ): ( 
        <>
        <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
            >
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
          <Link to='/login' className="text-gray-800 dark:text-gray-200">
             <Navbar className=" dark:bg-neutral-900">Login</Navbar>
          </Link>
          <Link to='/register' className="text-gray-800 dark:text-gray-200">
             <Navbar className=" dark:bg-neutral-900">Register</Navbar>
          </Link>
          <Flowbite>
                <DarkThemeToggle></DarkThemeToggle>
              </Flowbite>
          </Navbar.Collapse>
        </>
        )}
  </Navbar>
  )
}

export default NavBar