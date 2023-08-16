import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/llipse.svg";

const Navbar = () => {
  return (
    <div className="bg-[#6078ea] shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="ml-14 relative">
          <input
            type="text"
            className="border rounded-md px-9 py-2 w-[800px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center mr-11">
        <FontAwesomeIcon icon={faBell} className="text-white text-xl mr-4" />
        {/* User profile image */}
        <img
          src={img}
          alt=""
          className="w-auto h-auto rounded-full object-cover"
        />
        {/* User information */}
        <div className="ml-3">
          <div className="font-semibold">John Doe</div>
          <div className="text-white">Role: Teacher</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
