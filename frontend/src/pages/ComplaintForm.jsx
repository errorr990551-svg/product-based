import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../services/api";

export default function ComplaintForm() {
  const { register, handleSubmit, reset } = useForm();
  const [showOtherComplaint, setShowOtherComplaint] = useState(false);
  const [showOtherFrequency, setShowOtherFrequency] = useState(false);
  const [showOtherSize, setShowOtherSize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const onSubmit = async (data) => {
  try {
    setLoading(true);
    setMessage({ text: "", type: "" });

    // Handle "Other" selections
    if (data.complaintNature === "Other" && data.complaintOther) {
      data.complaintNature = data.complaintOther;
    }
    if (data.frequency === "Other" && data.frequencyOther) {
      data.frequency = data.frequencyOther;
    }
    if (data.flowMeterSize === "Other" && data.flowMeterSizeOther) {
      data.flowMeterSize = data.flowMeterSizeOther;
    }

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "image" && value?.length > 0) {
        formData.append("image", value[0]);
      } else {
        formData.append(key, value);
      }
    });

    
    await api.post("/complaint", formData);

    setMessage({
      text: "Complaint submitted successfully!",
      type: "success",
    });

    reset();
    setShowOtherComplaint(false);
    setShowOtherFrequency(false);
    setShowOtherSize(false);
  } catch (error) {
    console.error("Error submitting form:", error);
    setMessage({
      text: "Failed to submit complaint. Please try again.",
      type: "error",
    });
  } finally {
    setLoading(false);
  }
};


  const inputStyle =
    "tw-mt-1 tw-block tw-w-full tw-bg-black/50 tw-border-2 tw-border-gray-600 tw-rounded-md tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-yellow-400 focus:tw-border-transparent tw-transition-all";
  const labelStyle = "tw-block tw-text-sm tw-font-medium tw-text-yellow-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tw-max-w-6xl tw-mx-auto tw-p-4 md:tw-p-8 tw-space-y-6 md:tw-space-y-8 tw-bg-gradient-to-br tw-from-black tw-to-yellow-600 tw-text-gray-200 tw-rounded-lg tw-shadow-lg"
    >
      <div className="tw-text-center">
        <h2 className="tw-text-3xl tw-font-bold tw-text-yellow-400">
          Lodge a Complaint
        </h2>
        <p className="tw-text-gray-400 tw-mt-1">
          Please provide the details about your issue below.
        </p>
      </div>

      {/* --- This is the new grid container for the first two rows --- */}
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
        
        {/* Row 1, Column 1 */}
        <div className="tw-p-4 tw-border tw-border-gray-700 tw-rounded-md tw-space-y-6">
          <h3 className="tw-text-lg tw-font-semibold tw-text-white">Customer Information</h3>
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6">
            <div>
              <label className={labelStyle}>Customer Name*</label>
              <input {...register("customerName", { required: true })} className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Contact Person*</label>
              <input {...register("contactPerson", { required: true })} className={inputStyle} />
            </div>
            <div className="sm:tw-col-span-2">
              <label className={labelStyle}>Email Address*</label>
              <input type="email" {...register("email", { required: true })} className={inputStyle} />
            </div>
            <div className="sm:tw-col-span-2">
              <label className={labelStyle}>Phone Number*</label>
              <input type="tel" {...register("phone", { required: true })} className={inputStyle} />
            </div>
          </div>
        </div>

        {/* Row 1, Column 2 */}
        <div className="tw-p-4 tw-border tw-border-gray-700 tw-rounded-md tw-space-y-6">
          <h3 className="tw-text-lg tw-font-semibold tw-text-white">Product Details</h3>
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6">
            <div>
              <label className={labelStyle}>Flow Meter Model*</label>
              <input {...register("flowMeterModel", { required: true })} className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Serial Number</label>
              <input {...register("serialNumber")} className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Flow Meter Size</label>
              <select {...register("flowMeterSize")} className={inputStyle} onChange={(e) => setShowOtherSize(e.target.value === "Other")}>
                <option value="">Select...</option>
                <option value="25 mm">25 mm</option>
                <option value="50 mm">50 mm</option>
                <option value="80 mm">80 mm</option>
                <option value="100 mm">100 mm</option>
                <option value="Other">Other</option>
              </select>
              {showOtherSize && (
                <input {...register("flowMeterSizeOther")} placeholder="Please specify" className={`${inputStyle} tw-mt-2`} />
              )}
            </div>
            <div>
              <label className={labelStyle}>Make/Brand*</label>
              <input {...register("makeBrand", { required: true })} className={inputStyle} />
            </div>
            <div className="sm:tw-col-span-2">
              <label className={labelStyle}>Warranty Status*</label>
              <select {...register("warrantyStatus", { required: true })} className={inputStyle}>
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 2, Column 1 */}
        <div className="tw-p-4 tw-border tw-border-gray-700 tw-rounded-md tw-space-y-4">
          <h3 className="tw-text-lg tw-font-semibold tw-text-white">Complaint Details</h3>
          <div>
            <label className={labelStyle}>Nature of Complaint*</label>
            <select {...register("complaintNature", { required: true })} className={inputStyle} onChange={(e) => setShowOtherComplaint(e.target.value === "Other")}>
              <option value="">Select...</option>
              <option value="Not showing accurate reading">Not showing accurate reading</option>
              <option value="Not functioning">Not functioning</option>
              <option value="Display issue">Display issue</option>
              <option value="Calibration required">Calibration required</option>
              <option value="Other">Other</option>
            </select>
            {showOtherComplaint && (
              <textarea {...register("complaintOther")} placeholder="Please specify your complaint" className={`${inputStyle} tw-mt-2`} />
            )}
          </div>
          <div>
            <label className={labelStyle}>Frequency of Occurrence</label>
            <select {...register("frequency")} className={inputStyle} onChange={(e) => setShowOtherFrequency(e.target.value === "Other")}>
              <option value="">Select...</option>
              <option value="Once">Once</option>
              <option value="Intermittent">Intermittent</option>
              <option value="Continuous">Continuous</option>
              <option value="Other">Other</option>
            </select>
            {showOtherFrequency && (
              <input {...register("frequencyOther")} placeholder="Please specify" className={`${inputStyle} tw-mt-2`} />
            )}
          </div>
          <div>
            <label className={labelStyle}>Description of Issue*</label>
            <textarea {...register("issueDescription", { required: true })} className={inputStyle} rows="4" />
          </div>
        </div>

        {/* Row 2, Column 2 */}
        <div className="tw-p-4 tw-border tw-border-gray-700 tw-rounded-md tw-space-y-4">
          <h3 className="tw-text-lg tw-font-semibold tw-text-white">Support Request</h3>
          <div>
            <label className={labelStyle}>Require On-Site Visit?</label>
            <select {...register("onSiteVisit")} className={inputStyle}>
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className={labelStyle}>Require Calibration Certificate?</label>
            <select {...register("calibrationCertificate")} className={inputStyle}>
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className={labelStyle}>Preferred Contact Method</label>
            <select {...register("contactMethod")} className={inputStyle}>
              <option value="">Select...</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attachments and Submit sections are now outside the grid, so they span the full width */}
      <div>
        <label className={labelStyle}>Upload Supporting Documents/Images</label>
        <input
          type="file"
          {...register("image")}
          className="tw-block tw-w-full tw-text-sm tw-text-gray-400 tw-mt-2 file:tw-mr-4 file:tw-py-2 file:tw-px-4 file:tw-rounded-md file:tw-border-0 file:tw-text-sm file:tw-font-semibold file:tw-bg-yellow-400 file:tw-text-black hover:file:tw-bg-yellow-500"
        />
      </div>

      <div className="tw-text-center">
        <button
          type="submit"
          className="tw-w-full sm:tw-w-auto tw-bg-yellow-400 tw-text-black tw-font-bold tw-px-8 tw-py-3 tw-rounded-md hover:tw-bg-yellow-500 tw-transition-colors tw-duration-300 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </button>

        {message.text && (
          <p className={`tw-mt-4 tw-text-center tw-font-medium ${message.type === "success" ? "tw-text-green-400" : "tw-text-red-400"}`}>
            {message.text}
          </p>
        )}
      </div>
    </form>
  );
}