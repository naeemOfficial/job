import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faUser,
  faPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="bg-gradient-to-bl from-cyan-500 to-fuchsia-500 text-white w-64 h-screen flex flex-col">
      <div className="p-6 text-2xl font-semibold">Job Task</div>
      {/* Job Task content */}
      <div className="flex flex-col items-start p-6">
        <div className="mb-8">
          <Link to="/dashboard">
            <button className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Dashboard
            </button>
          </Link>
        </div>
        <div className="mb-8">
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Courses
          </button>
        </div>
        <div className="mb-8">
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Account
          </button>
        </div>
        <div className="mb-8">
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add New Course
          </button>
        </div>
        <div>
          <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
