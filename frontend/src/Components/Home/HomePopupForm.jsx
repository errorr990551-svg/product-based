// import React, { useEffect, useState } from "react";
// import api from "../../services/api";

// const HomePopupForm = () => {
//   // 1. Internal State for visibility
//   const [isOpen, setIsOpen] = useState(false);
  
//   // 2. Form State
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   // 3. Effect to open popup automatically on load (Once per session/refresh)
//   useEffect(() => {
//     // Check if we have already shown it this session if you wanted to persist across reloads, 
//     // but per your request "till website is reload", simple state is sufficient.
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   // 4. Lock body scroll when popup is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => (document.body.style.overflow = "auto");
//   }, [isOpen]);

//   // Handler to close the popup
//   const onClose = () => {
//     setIsOpen(false);
//   };

//   // If closed, return null so it doesn't affect the DOM/Layout at all
//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       await api.post("/contact", formData);
//       setSuccess("Message sent successfully!");
//       setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      
//       // Close automatically after success
//       setTimeout(() => {
//         onClose();
//         setSuccess("");
//       }, 1500);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClasses = "tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-bg-white tw-px-4 tw-py-3 tw-text-black tw-outline-none focus:tw-border-[#ffd700] focus:tw-ring-1 focus:tw-ring-[#ffd700] tw-transition-all placeholder:tw-text-gray-400";

//   return (
//     <div
//       className="tw-fixed tw-inset-0 tw-z-[9999] tw-flex tw-items-center tw-justify-center tw-bg-black/60 tw-backdrop-blur-sm tw-p-4"
//       onClick={onClose}
//     >
//       <div
//         className="tw-relative tw-w-full tw-max-w-3xl tw-bg-white tw-rounded-xl tw-p-8 md:tw-p-12 tw-shadow-2xl tw-animate-fade-in-up"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="tw-absolute tw-right-4 tw-top-4 tw-text-gray-400 hover:tw-text-black tw-transition-colors tw-text-3xl tw-leading-none"
//           aria-label="Close"
//         >
//           &times;
//         </button>

//         {/* Header */}
//         <div className="tw-mb-8">
//           <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-2">
//             Drop in your details below
//           </h2>
//           <p className="tw-text-gray-600 tw-text-lg">
//             Let our experts take over from here!
//           </p>
//         </div>

//         {/* Status Messages */}
//         {success && (
//           <div className="tw-mb-6 tw-p-4 tw-bg-green-50 tw-border tw-border-green-200 tw-text-green-700 tw-rounded-lg tw-font-medium tw-text-center">
//             {success}
//           </div>
//         )}
//         {error && (
//           <div className="tw-mb-6 tw-p-4 tw-bg-red-50 tw-border tw-border-red-200 tw-text-red-600 tw-rounded-lg tw-font-medium tw-text-center">
//             {error}
//           </div>
//         )}

//         {/* Form */}
//         <form className="tw-space-y-6" onSubmit={handleSubmit}>
//           <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               required
//               className={inputClasses}
//             />
//             <input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className={inputClasses}
//             />
//             <input
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               required
//               className={inputClasses}
//             />
//             <input
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               placeholder="Company"
//               className={inputClasses}
//             />
//           </div>

//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             rows="4"
//             className={`${inputClasses} tw-resize-none`}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="tw-w-full tw-rounded-lg tw-bg-[#ffd700] tw-py-4 tw-font-bold tw-text-black tw-uppercase tw-tracking-wider tw-shadow-md hover:tw-bg-yellow-400 hover:tw-shadow-lg tw-transition-all tw-transform active:tw-scale-[0.99] disabled:tw-opacity-60 disabled:tw-cursor-not-allowed"
//           >
//             {loading ? "Sending..." : "SEND MESSAGE"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HomePopupForm;



import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import api from "../../services/api";
import { useState } from "react";

const HomePopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Lock scroll ONLY when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await api.post("/contact", formData);
      
      if (response.data.success) {
        setSuccess(response.data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

        setTimeout(() => {
          onClose();
          setSuccess("");
        }, 1500);
      } else {
        setError(response.data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      
      // Handle specific error types
      if (err.code === "ECONNABORTED") {
        setError("Request timed out. Please check your connection and try again.");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message?.includes("timeout")) {
        setError("Request timed out. Please check your connection and try again.");
      } else if (!err.response) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("Failed to send message. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const popupContent = (
    <div
      className="tw-fixed tw-inset-0 tw-z-[9999] tw-flex tw-items-center tw-justify-center tw-bg-black/60 tw-backdrop-blur-sm tw-p-4"
      onClick={onClose}
    >
      <div
        className="tw-relative tw-w-full tw-max-w-3xl tw-bg-white tw-rounded-xl tw-p-8 md:tw-p-12 tw-shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="tw-absolute tw-right-4 tw-top-4 tw-text-gray-400 hover:tw-text-black tw-text-3xl"
        >
          &times;
        </button>

        <div className="tw-mb-8">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-2">
            Drop in your details below
          </h2>
          <p className="tw-text-gray-600 tw-text-lg">
            Let our experts take over from here!
          </p>
        </div>

        {success && (
          <div className="tw-mb-6 tw-p-4 tw-bg-green-50 tw-text-green-700 tw-rounded-lg tw-text-center">
            {success}
          </div>
        )}
        {error && (
          <div className="tw-mb-6 tw-p-4 tw-bg-red-50 tw-text-red-600 tw-rounded-lg tw-text-center">
            {error}
          </div>
        )}

        <form className="tw-space-y-6" onSubmit={handleSubmit}>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="tw-w-full tw-rounded-lg tw-border tw-px-4 tw-py-3"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="tw-w-full tw-rounded-lg tw-border tw-px-4 tw-py-3"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="tw-w-full tw-rounded-lg tw-border tw-px-4 tw-py-3"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="tw-w-full tw-rounded-lg tw-border tw-px-4 tw-py-3"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            required
            className="tw-w-full tw-rounded-lg tw-border tw-px-4 tw-py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="tw-w-full tw-rounded-lg tw-bg-[#ffd700] tw-py-4 tw-font-bold"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );

  // 🔥 PORTAL (KEY FIX)
  return ReactDOM.createPortal(popupContent, document.body);
};

export default HomePopupForm;
