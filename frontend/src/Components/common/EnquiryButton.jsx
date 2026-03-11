import { usePopup } from "../../context/PopupContext";

const EnquiryButton = ({
  className = "",
  children = "Enquiry Now",
}) => {
  const { openPopup } = usePopup();

  return (
    <button
      className={`my-2 btn-enquiry ${className}`}
      onClick={openPopup}
    >
      <span>{children}</span>
    </button>
  );
};

export default EnquiryButton;
