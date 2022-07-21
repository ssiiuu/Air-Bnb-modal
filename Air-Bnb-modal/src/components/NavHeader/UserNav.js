import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SET_USER_INFOR } from "../../redux/Constants/userConstant";
import { localServe } from "../../Services/LocalServe";

export default function UserNav() {
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  console.log("userInfor", { userInfor });
  let dispatch = useDispatch();
  const handleLogout = () => {
    localServe.removeUserInfor();
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });
  };
  return userInfor ? (
    // <div className="space-x-3">
    //     <span>{userInfor.name}</span>
    //     <button
    //         onClick={handleLogout}
    //         className="px-3 py-2 bg-red-600 text-white rounded cursor-pointer"
    //     >
    //         Log out
    //     </button>
    // </div>
    <div className="btn-group">
      <button
        type="button"
        className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-150 focus:outline-none focus:bg-gray-600"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="border-r pr-2 pl-2">
          <i className="fa-solid fa-bars w-4" />
        </div>
        <div>
          {userInfor.avatar ? (
            <img
              src={userInfor.avatar}
              className="object-cover w-5 h-5 rounded-2xl"
            />
          ) : (
            <img
              src="https://chillandthrillapartments.com/wp-content/uploads/2020/01/no-photo.jpg"
              className="object-cover w-5 h-5 rounded-2xl"
            />
          )}
        </div>
      </button>
      <div className="dropdown-menu dropdown-menu-right rounded-xl">
        <div className="border-b">
          {userInfor.type === "ADMIN" ? (
            <NavLink to="/admin/dashboard">
              <button
                className="font-bold dropdown-item focus:outline-none focus:bg-gray-300 focus:text-black"
                type="button"
              >
                DashBoard
              </button>
            </NavLink>
          ) : (
            <></>
          )}
          <NavLink to="/">
            <button
              className="dropdown-item focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Home
            </button>
          </NavLink>
          <NavLink to={`/trips/${userInfor._id}`}>
            <button
              className="dropdown-item pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Trips
            </button>
          </NavLink>
        </div>
        <div className="border-b">
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Home
          </button>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Experience
          </button>
          <button
            className="dropdown-item pt-2 pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Help
          </button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="dropdown-item text-red-500 focus:outline-none focus:bg-gray-300"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="btn-group">
      <button
        type="button"
        className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow-md transition duration-150 focus:outline-none focus:bg-white"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="border-r pr-2 pl-2">
          <i className="fa-solid fa-bars w-4" />
        </div>
        <div className="pl-1 pr-1">
          <i className="fa-solid fa-circle-user w-4" />
        </div>
      </button>
      <div className="dropdown-menu dropdown-menu-right rounded-xl">
        <div className="border-b">
          <NavLink to="/">
            <button
              className="dropdown-item focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Home
            </button>
          </NavLink>
          <NavLink to="/login">
            <button
              className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Sign In
            </button>
          </NavLink>
          <NavLink to="/register">
            <button
              className="dropdown-item pt-2 pb-2 focus:outline-none focus:bg-gray-300 focus:text-black"
              type="button"
            >
              Sign Up
            </button>
          </NavLink>
        </div>
        <div>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Home
          </button>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Host Your Experience
          </button>
          <button
            className="dropdown-item pt-2 focus:outline-none focus:bg-gray-300 focus:text-black"
            type="button"
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
}
