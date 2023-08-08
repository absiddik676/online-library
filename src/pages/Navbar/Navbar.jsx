import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveRoute from '../../Routes/ActiveRoute';
import { AuthContext } from '../../provider/AuthProvider';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import useStudent from '../../Hooks/useStudent';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [navbarBg, setNavbarBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    logOut()
  }
  const user1 = useStudent();
  console.log();
  return (
    <div className=''>
      <div className={`navbar mr-55  z-50 fixed ${navbarBg ? 'bg-black bg-opacity-75' : 'bg-transparent'}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <ActiveRoute to='/dashboard'>Dashboard</ActiveRoute>
              <ActiveRoute to='/dashboard'>Books</ActiveRoute>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white text-md gap-4 px-1">
            <ActiveRoute to='/'>Home</ActiveRoute>
            {user1?.isStudentLoading ? 'Dashboard' : <ActiveRoute to={`${user1?.isStudent?.[0]?.role === 'student' ?'/dashboard/reqBook' : '/dashboard/addbook'} `}>Dashboard</ActiveRoute>}
            <ActiveRoute to='/books'>Books</ActiveRoute>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
                onClick={handleLogout}
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </> : <>
              <Link to='/login'>
                <button
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                >
                  <FiLogIn />
                  <span>Login</span>
                </button>
              </Link>
            </>

          }
          {user ? <>
            <div className="avatar ml-6">
              <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-12">
                <img src={user?.photoURL} />
              </div>
            </div>
          </> : ''}
        </div>
      </div>
    </div>
  );
};

export default Navbar;