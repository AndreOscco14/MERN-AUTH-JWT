import React, { useState } from "react";

import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


function NavBar() {

  const { isAuthenticated, logout, user } = useAuth()

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" className='dark:bg-yellow-300'>
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold ">Flowbite React</span>
      </Navbar.Brand>

        {isAuthenticated ? ( 
          <>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Hi {user.username}!</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>

              <Link to='/add-task'>
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
              <Link to='/add-task'>
                  <Navbar>New Tasks</Navbar>
              </Link>
              <Link to='/tasks'>
                  <Navbar>Tasks</Navbar>
              </Link>
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
          <Link to='/login'>
             <Navbar>Login</Navbar>
          </Link>
          <Link to='/register'>
             <Navbar>Register</Navbar>
          </Link>
          </Navbar.Collapse>
        </>
        )}
  </Navbar>
  )
}

export default NavBar