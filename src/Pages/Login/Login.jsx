import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons from a suitable icon library

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-5xl font-semibold mb-20 text-[#333333]">
        Welcome To Task Job
      </h1>
      <div className="w-[600px] mb-4">
        <label className="block text-xl font-medium text-gray-700">
          Email Address*
        </label>
        <input
          type="text"
          className="mt-3 py-4 px-3 w-full text-lg border rounded-md focus:ring focus:ring-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
        />
      </div>
      <div className="w-[600px] mb-4 relative">
        <label className="block text-xl font-medium text-gray-700">
          Password*
        </label>
        <div className="relative items-center">
          <input
            type={showPassword ? "text" : "password"}
            className="mt-3 py-4 pl-3 w-full border rounded-md focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button
            className="absolute top-1/2 mt-2 right-2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <button
        className="w-[600px] bg-[#6078ea] text-white px-6 py-2 text-xl rounded-md hover:bg-blue-600 mt-5"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="mt-4 mb-12">
        Don’t Have An Account?{" "}
        <a href="/register" className="text-blue-500">
          Register Now
        </a>
      </p>
    </div>
  );
};

export default Login;
