import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const Job = () => {
  const [jobData, setJobData] = useState([]);
  const [showAll, setShowAll] = useState(false); // Add the showAll state

  useEffect(() => {
    axios
      .get("/public/JobData.json") // Update the URL to match your server setup
      .then((response) => setJobData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const visibleJobData = showAll ? jobData : jobData.slice(0, 4); // Control the visible job data based on showAll state

  return (
    <div className="mt-14 container mx-auto ">
      <div className="text-center space-y-3">
        <h1 className="text-[#1A1919] font-bold text-3xl lg:text-4xl">
          Featured Jobs
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-14">
        {visibleJobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <button
        className="mt-4  bg-[#6078EA] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-5 py-2.5 rounded-lg text-white font-semibold text-sm lg:text-xl"
        onClick={() => setShowAll(!showAll)} // Toggle the showAll state on button click
      >
        {showAll ? "See Less" : "See All"}
      </button>
    </div>
  );
};

export default Job;
