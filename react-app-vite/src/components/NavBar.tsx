import React, { useRef } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { getLoginInfo } from "../utils/LoginInfo";

const NavBar = () => {
  let navigate = useNavigate();
  const role = getLoginInfo()?.role;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-400 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl text-white tracking-tight flex justify-center items-center gap-2">
            <img src={Logo} className="h-12 w-14 "></img>Todo App
          </span>
        </div>
      </div>
      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-blue-700 lg:flex-grow">
          <a onClick={() => navigate("/active")} className="block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700 mr-2">
            Active Todos
          </a>
          <a onClick={() => navigate("/completed")} className=" cursor-pointer block mt-4 text-white lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
            Compeleted
          </a>
          <a
            onClick={() => navigate("/users")}
            style={{ display: role != "ADMIN" ? "none" : "" }}
            className="block cursor-pointer mt-4 text-white lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Users
          </a>
        </div>
        {/* This is an example component */}
        <div className="flex ">
          <a
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="cursor-pointer block text-md px-4 py-2 text-white rounded ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Log out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
