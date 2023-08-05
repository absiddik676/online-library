import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { TbSquareRotatedFilled } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-[#262626] text-white text-lg font-semibold">
            {/* Sidebar content here */}
            <NavLink to='/dashboard/addbook' className="mb-2">Add Book</NavLink>
            <NavLink to='/dashboard/requested' className="mb-2">Requested Book</NavLink>
            <NavLink to='/dashboard/alluser'>Manage User</NavLink>
            <div className="flex items-center w-full mt-6">
              <div className="border-t border-white  w-36 h-0 flex-1 mr-3"></div>
              <TbSquareRotatedFilled className='text-white ' size={15} />
              <TbSquareRotatedFilled className='text-white ' size={15} />
              <div className="border-t border-white  h-0 flex-1 ml-3"></div>
            </div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/books'>Books</NavLink>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;