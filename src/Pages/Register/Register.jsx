import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    information: {
      fullName: "",
      emailAddress: "",
      position: "",
      instituteName: "",
      educationLevel: "",
      workTime: "",
    },
    security: {
      newPassword: "",
      confirmPassword: "",
    },
    confirmation: {
      agree: false,
    },
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Handle form submission logic here
      console.log(formData);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleFormChange = (event, section) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };
  const showAdditionalFields =
    formData.information.position === "student" ||
    formData.information.position === "teacher";
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Stepper activeStep={step}>
        <Step label="Information" />
        <Step label="Security" />
        <Step label="Confirmation" />
      </Stepper>

      <div className="mt-8">
        {step === 0 && (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.information.fullName}
                onChange={(e) => handleFormChange(e, "information")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.information.emailAddress}
                onChange={(e) => handleFormChange(e, "information")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Position</label>
              <select
                name="position"
                value={formData.information.position}
                onChange={(e) => handleFormChange(e, "information")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Position</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            {showAdditionalFields && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">Institute Name</label>
                  <select
                    name="instituteName"
                    value={formData.information.instituteName}
                    onChange={(e) => handleFormChange(e, "information")}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Institute Name</option>
                    <option value="Dhaka National Medical College">
                      Dhaka National Medical College
                    </option>
                    <option value="Ibrahim Medical College">
                      Ibrahim Medical College
                    </option>
                    <option value="Bangladesh Medical College">
                      Bangladesh Medical College
                    </option>
                    <option value="Holy Family Red Crescent Medical College">
                      Holy Family Red Crescent Medical College
                    </option>
                  </select>
                </div>
                {formData.information.position === "student" && (
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Education Level
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.information.educationLevel}
                      onChange={(e) => handleFormChange(e, "information")}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Education Level</option>
                      <option value="SSC">
                        Secondary School Certificate (SSC)
                      </option>
                      <option value="HSC">
                        Higher Secondary School Certificate (HSC)
                      </option>
                      <option value="Diploma">Diploma</option>
                      <option value="BSC">Bachelor of Science (BSC)</option>
                      <option value="MA">Master of Arts (MA)</option>
                      <option value="BA">Bachelor of Arts (BA)</option>
                    </select>
                  </div>
                )}
                {formData.information.position === "teacher" && (
                  <div className="mb-4">
                    <label className="block text-gray-700">Work Time</label>
                    <select
                      name="workTime"
                      value={formData.information.workTime}
                      onChange={(e) => handleFormChange(e, "information")}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Work Time</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                    </select>
                  </div>
                )}
              </>
            )}
          </form>
        )}

        {step === 1 && (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="newPassword"
                  value={formData.security.newPassword}
                  onChange={(e) => handleFormChange(e, "security")}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute top-2 right-3"
                  onClick={handlePasswordToggle}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.security.confirmPassword}
                  onChange={(e) => handleFormChange(e, "security")}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute top-2 right-3"
                  onClick={handlePasswordToggle}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 2 && (
          <form>
            <div className="mb-4 text-center">
              <FaCheckCircle className="text-[#6078ea] text-[180px] border-[19px] border-[#cfd7f9] rounded-full mx-auto mb-4" />
              <h2 className="text-3xl font-semibold">Thank You!</h2>
              <p className="text-xl md:w-[330px] mx-auto text-[#9F9F9F] mt-4">
                Account Has Been Created. Enjoy Job Task.{" "}
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="/dashboard"
                className="px-14 py-4 border border-[#6078EA] text-xl font-semibold text-[#6078EA] rounded-md  focus:outline-none"
              >
                Go To Home
              </Link>
            </div>
          </form>
        )}

        <div className="flex justify-between mt-8">
          {step > 0 &&
            step !== 2 && ( // Only show the previous button if step > 0 and not on the confirmation step
              <button
                className="px-4 py-2 bg-[#cfd7f9] text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
          {step === 2 ? null : ( // Keep this empty // This is replaced by the linked "Go Home" button above
            <button
              className="px-10 py-3 bg-[#6078EA] text-white rounded-md  focus:outline-none"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
