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



//   return (
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//         </a>
//         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
//               <span className="sr-only">Open user menu</span>
//               <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user photo"/>
//             </button>
//       <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
//         <div className="px-4 py-3">
//           <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//           <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
//         </div>
//         <ul className="py-2" aria-labelledby="user-menu-button">
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//           </li>
//         </ul>
//       </div>
//       <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//         </svg>
//     </button>
//   </div>
//   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
//     <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>
//   )
}

export default NavBar