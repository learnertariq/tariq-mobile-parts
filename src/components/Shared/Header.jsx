import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../utils/firebase.init";
import HeaderLinks from "../HeaderLinks";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const mobileMenuRef = useRef();

  return (
    <nav className="shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7 w-full justify-between">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-purple-500 text-lg">
                  TMParts
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <HeaderLinks />
            </div>
            <div className="hidden md:flex items-center space-x-3 "></div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => mobileMenuRef.current.classList.toggle("hidden")}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div ref={mobileMenuRef} className="hidden mobile-menu md:hidden ">
          <div className="flex flex-col">
            <HeaderLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
