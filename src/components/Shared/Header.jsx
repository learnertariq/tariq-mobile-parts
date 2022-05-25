import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../utils/firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const mobileMenuRef = useRef();

  return (
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <Link to="/" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-500 text-lg">TMParts</span>
              </Link>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <Link to="/" class="py-4 px-2 text-gray-800  font-semibold ">
                Home
              </Link>
              <Link to="/blogs" class="py-4 px-2 text-gray-800  font-semibold ">
                Blogs
              </Link>
              <Link
                to="/dashboard"
                class="py-4 px-2 text-gray-800  font-semibold "
              >
                Dashboard
              </Link>
              <Link
                to="/portfolio"
                class="py-4 px-2 text-gray-800  font-semibold "
              >
                Portfolio
              </Link>

              <Link to="/login" class="py-4 px-2 text-gray-800  font-semibold ">
                Login
              </Link>
              <Link
                to="/register"
                class="py-4 px-2 text-gray-800  font-semibold "
              >
                Register
              </Link>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-3 "></div>
          <div class="md:hidden flex items-center">
            <button
              onClick={() => mobileMenuRef.current.classList.toggle("hidden")}
              class="outline-none mobile-menu-button"
            >
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div ref={mobileMenuRef} class="hidden mobile-menu md:hidden">
        <div className="flex flex-col">
          <Link to="/" class="py-4 px-2 text-gray-800  font-semibold ">
            Home
          </Link>
          <Link to="/blogs" class="py-4 px-2 text-gray-800  font-semibold ">
            Blogs
          </Link>
          <Link to="/dashboard" class="py-4 px-2 text-gray-800  font-semibold ">
            Dashboard
          </Link>
          <Link to="/portfolio" class="py-4 px-2 text-gray-800  font-semibold ">
            Portfolio
          </Link>
          <Link to="/login" class="py-4 px-2 text-gray-800  font-semibold ">
            Login
          </Link>
          <Link to="/register" class="py-4 px-2 text-gray-800  font-semibold ">
            Register
          </Link>
        </div>
      </div>
    </nav>

    // <div className="navbar bg-base-100">
    //   <div className="flex-1">
    //     <a className="btn btn-ghost normal-case text-xl">TMParts</a>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal p-0">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li tabIndex="0">
    //         <a>
    //           Parent
    //           <svg
    //             className="fill-current"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    //           </svg>
    //         </a>
    //         <ul className="p-2 bg-base-100">
    //           <li>
    //             <a>Submenu 1</a>
    //           </li>
    //           <li>
    //             <a>Submenu 2</a>
    //           </li>
    //         </ul>
    //       </li>
    //       {!user && (
    //         <>
    //           <li>
    //             <Link to="/register">Register</Link>
    //           </li>
    //           <li>
    //             <Link to="/login">Login</Link>
    //           </li>
    //         </>
    //       )}
    //       {user && (
    //         <>
    //           <li>
    //             <Link to="/dashboard">Dashboard</Link>
    //           </li>
    //           <li>
    //             <Link to="/logout">Logout</Link>
    //           </li>
    //           <li className="items-center">{user?.displayName}</li>
    //         </>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
