import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItems } from "../product/ProductSlicer";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const cartProducts = useSelector(cartItems);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <nav className="bg-white border-gray-200 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap content-center place-content-between mx-auto">
          <div className="justify-self-start self-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center uppercase text-xl font-semibold whitespace-nowrap dark:text-white">
                purchase me today
              </span>
            </Link>
          </div>
          <div className="flex grow gap-2 place-content-center
            h-auto md:place-content-around">
           
              <button>
                <Link to="/addnewproduct">
                  <span className="self-end uppercase text-xl font-semibold whitespace-nowrap dark:text-white">
                    ADD NEW PRDODUCT
                  </span>
                </Link>
              </button>

              <button
             className="  dark:bg-gray-900"
                onClick={handleSignOut}
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </button>
            
          </div>
          <div className="justify-self-end self-center">
            <button
              className="py-4 px-1    relative border-2 border-transparent text-yellow-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <Link to="/cart">
                {/* <Link to="/cartshow"> */}
                <svg
                  className="h-12 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute inset-0 object-right-top -mr-6">
                  <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                    {cartProducts}
                  </div>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
