import React, { useState } from "react";

import api from "../services/api";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    role: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const roles = [
    "Sales & Application Engineer",
    "Business Development / PSU Liaison",
    "Mechanical Design Engineer",
    "Field Service & Commissioning Engineer",
    "Automation / IoT Engineer",
    "Production & Quality Control Engineer",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage({ text: "", type: "" });

  try {
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    
    await api.post("/apply", data);

    setMessage({
      text: "Application submitted successfully!",
      type: "success",
    });

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      location: "",
      role: "",
      resume: null,
    });
  } catch (err) {
    console.error(err);
    setMessage({
      text: "Failed to submit application. Please try again.",
      type: "error",
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="tw-min-h-screen tw-bg-gradient-to-br tw-from-black tw-to-yellow-600 tw-py-12">
      <div className="tw-max-w-3xl tw-mx-auto tw-bg-black/70 tw-rounded-xl tw-shadow-2xl tw-p-8">
        
        <h2 className="tw-text-3xl tw-font-extrabold tw-text-yellow-400 tw-text-center tw-mb-2">
          IOTAFLOW Careers
        </h2>
        <p className="tw-text-center tw-text-gray-300 tw-mb-8">
          Apply for exciting opportunities with us
        </p>

        {message.text && (
          <div
            className={`tw-mb-6 tw-text-center tw-font-medium ${
              message.type === "success"
                ? "tw-text-green-400"
                : "tw-text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="tw-space-y-6">
          <div>
            <label className="tw-block tw-text-yellow-400 tw-font-medium">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="tw-mt-1 tw-w-full tw-rounded-md tw-bg-black/60 tw-border tw-border-gray-600 tw-px-4 tw-py-2 tw-text-white focus:tw-ring-2 focus:tw-ring-yellow-400"
            />
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <div>
              <label className="tw-block tw-text-yellow-400 tw-font-medium">
                Email ID *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="tw-mt-1 tw-w-full tw-rounded-md tw-bg-black/60 tw-border tw-border-gray-600 tw-px-4 tw-py-2 tw-text-white focus:tw-ring-2 focus:tw-ring-yellow-400"
              />
            </div>

            <div>
              <label className="tw-block tw-text-yellow-400 tw-font-medium">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="tw-mt-1 tw-w-full tw-rounded-md tw-bg-black/60 tw-border tw-border-gray-600 tw-px-4 tw-py-2 tw-text-white focus:tw-ring-2 focus:tw-ring-yellow-400"
              />
            </div>
          </div>

          <div>
            <label className="tw-block tw-text-yellow-400 tw-font-medium">
              Current City / Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="tw-mt-1 tw-w-full tw-rounded-md tw-bg-black/60 tw-border tw-border-gray-600 tw-px-4 tw-py-2 tw-text-white focus:tw-ring-2 focus:tw-ring-yellow-400"
            />
          </div>

          <div>
            <label className="tw-block tw-text-yellow-400 tw-font-medium">
              Applying For *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="tw-mt-1 tw-w-full tw-rounded-md tw-bg-black/60 tw-border tw-border-gray-600 tw-px-4 tw-py-2 tw-text-white focus:tw-ring-2 focus:tw-ring-yellow-400"
            >
              <option value="">Select Role</option>
              {roles.map((role, i) => (
                <option key={i} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="tw-block tw-text-yellow-400 tw-font-medium">
              Upload Resume (PDF / DOC / DOCX) *
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="tw-mt-2 tw-block tw-w-full tw-text-gray-300 file:tw-mr-4 file:tw-py-2 file:tw-px-4 file:tw-rounded-md file:tw-border-0 file:tw-font-semibold file:tw-bg-yellow-400 file:tw-text-black hover:file:tw-bg-yellow-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="tw-w-full tw-bg-yellow-400 tw-text-black tw-font-bold tw-py-3 tw-rounded-md hover:tw-bg-yellow-500 tw-transition disabled:tw-opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
