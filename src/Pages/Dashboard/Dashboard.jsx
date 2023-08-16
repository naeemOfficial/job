import React from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import DashboardContent from "./DashboardContent";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="flex">
      <Drawer />
      <div className="flex-grow">
        <Navbar />
        <DashboardContent />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
