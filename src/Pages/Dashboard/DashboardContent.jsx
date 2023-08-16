import React from "react";
import {
  faTasks,
  faTrophy,
  faChartLine,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardContent = () => {
  return (
    <div className="px-8 py-8">
      <div className="grid grid-cols-4 gap-6">
        {/* Task Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-start gap-3 mb-14">
            <div className="text-xl text-white h-10 w-10 bg-gradient-to-bl from-cyan-500 to-fuchsia-500 text-center pt-1 rounded-full">
              <FontAwesomeIcon icon={faTasks} className="" />
            </div>
            <div className="text-2xl font-bold">
              55
              <p className="text-[12px] text-[#767278]">Course completed</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 mt-2 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Achievement Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-start gap-3 mb-14">
            <div className="text-xl text-white h-10 w-10 bg-gradient-to-br from-yellow-400 to-red-600 text-center pt-1 rounded-full">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div className="text-2xl font-bold">
              20
              <p className="text-[12px] text-[#767278]">Certificate earned</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 mt-2 rounded-full">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-start gap-3 mb-14">
            <div className="text-xl text-white h-10 w-10 bg-gradient-to-br from-yellow-300 to-orange-500 text-center pt-1 rounded-full">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="text-2xl font-bold">
              25
              <p className="text-[12px] text-[#767278]">Certificate earned</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 mt-2 rounded-full">
              <div
                className="h-2 bg-orange-500 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Total Course Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-start gap-3 mb-14">
            <div className="text-xl text-white h-10 w-10 bg-gradient-to-r from-green-600 to-green-300 text-center pt-1 rounded-full">
              <FontAwesomeIcon icon={faBook} />
            </div>
            <div className="text-2xl font-bold">
              86
              <p className="text-[12px] text-[#767278]">Total Course</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mt-2">
              <button className="text-blue-500 font-semibold">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
