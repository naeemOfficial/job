import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-10">
      <img src={job.company_logo} alt={job.company_name} className="h-[39px]" />

      <div className="mt-8 space-y-4">
        <div>
          <h1 className="text-[#474747] font-bold text-xl sm:text-2xl">
            {job.job_title}
          </h1>
          <p className="text-[#757575] font-semibold sm:text-xl ">
            {job.company_name}
          </p>
        </div>

        {/* button work_location_type and employment_type*/}
        <div className="flex items-center gap-3 ">
          <button className="px-5 py-2.5 rounded-lg text-gradient font-bold border-[#9873ff] border">
            {job.work_location_type}
          </button>
          <button className="px-5 py-2.5 rounded-lg text-gradient font-bold border-[#9873ff] border">
            {job.employment_type}
          </button>
        </div>

        {/* location and salary */}
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
          <span className="flex items-center text-[#757575] gap-1">
            <MapPinIcon className="h-5 text-[#757575]" /> {job.location}
          </span>
          <span className="flex items-center text-[#757575] gap-1">
            <CurrencyDollarIcon className="h-5 text-[#757575]" />{" "}
            <span className="font-bold">Salary :</span> {job.salary}
          </span>
        </div>
      </div>
      <button className="mt-4  bg-[#6078EA] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-5 py-2.5 rounded-lg text-white font-semibold text-sm lg:text-xl">
        View More
      </button>
    </div>
  );
};

export default JobCard;
