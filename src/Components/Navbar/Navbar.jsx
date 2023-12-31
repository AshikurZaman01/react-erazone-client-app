import React, { useContext, useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../../Images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

function Navbar() {

  const {user , logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleMenu = () => {
    const list = document.querySelector('ul');
    if (list) {
      if (list.style.top === '80px') {
        list.style.top = '0';
        list.style.opacity = '0';
        setIsMenuOpen(false); 
      } else {
        list.style.top = '80px';
        list.style.opacity = '1';
        setIsMenuOpen(true); 
      }
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prevState) => !prevState);
  };



  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <NavLink to={'/'}>
            <span className="text-2xl  cursor-pointer">
              <img className="h-10 inline" src={logo} alt="Logo" />
            </span>
        </NavLink>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineCloseCircle /> : <HiMenuAlt2 />}
        </span>
      </div>

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        
        <li className="mx-4 my-6 md:my-0">
          <NavLink to={'/'}  className={({ isActive, isPending }) =>
                        isActive
                        ? "text-xl text-cyan-500 underline duration-500"
                        : isPending
                        ? "pending"
                        : ""
                        
                    }>
            HOME
          </NavLink>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <NavLink to={'/products'}  className={({ isActive, isPending }) =>
                        isActive
                        ? "text-xl text-cyan-500 underline duration-500"
                        : isPending
                        ? "pending"
                        : ""
                    }>
            PRODUCTS
          </NavLink>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <NavLink to={'/about'}  className={({ isActive, isPending }) =>
                        isActive
                        ? "text-xl text-cyan-500 underline duration-500"
                        : isPending
                        ? "pending"
                        : ""
                    }>
            ABOUT
          </NavLink>
        </li>

       

        <li className="mx-4 my-6 md:my-0">
          <NavLink to={'/contact'}  className={({ isActive, isPending }) =>
                        isActive
                        ? "text-xl text-cyan-500 underline duration-500"
                        : isPending
                        ? "pending"
                        : ""
                    }>
            CONTACT
          </NavLink>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <NavLink to={'/addproduct'}  className={({ isActive, isPending }) =>
                        isActive
                        ? "text-xl text-cyan-500 underline duration-500"
                        : isPending
                        ? "pending"
                        : ""
                    }>
            ADD PRODUCT
          </NavLink>
        </li>
      </ul>

        <span>
        {user ? (
        <div className="relative">
          <button
            className=" text-white duration-500 px-6 py-0 mx-4 "
            onClick={toggleUserDropdown}
          >
            <div>
              <div className="avatar">
                <div className="w-14 mask mask-hexagon">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
          </button>
          {isUserDropdownOpen && (
            <div className="absolute  right-0 mt-2 z-10 w-48 bg-white border rounded shadow-lg">
              <div className="px-4 py-2">
                <p>{user.displayName}</p>
                <p>{user.email}</p>
              </div>
              <div className="px-4 py-3">
                <button onClick={handleLogout} className='text-center block mx-auto text-white rounded bg-orange-500 w-full'>LOGOUT</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link to={'/login'}>
        <button className="bg-cyan-400 font-bold text-white duration-500 px-6 py-2 mx-4 hover-bg-cyan-500 rounded">
          LOGIN
        </button>
        </Link>
      )}
    </span>
    </nav>
  );
}

export default Navbar;
