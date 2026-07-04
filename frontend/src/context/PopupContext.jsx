import React, { createContext, useContext, useState, useEffect } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPurpose, setPopupPurpose] = useState("default");
  const [contactDetailsRevealed, setContactDetailsRevealed] = useState(() => {
    return localStorage.getItem("contactDetailsRevealed") === "true";
  });

  // Auto open after reload (your existing behavior)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only auto-open if contact details haven't been revealed yet
      const revealed = localStorage.getItem("contactDetailsRevealed") === "true";
      if (!revealed) {
        setPopupPurpose("default");
        setIsPopupOpen(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = (purpose = "default") => {
    setPopupPurpose(purpose);
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const revealContactDetails = () => {
    localStorage.setItem("contactDetailsRevealed", "true");
    setContactDetailsRevealed(true);
  };

  return (
    <PopupContext.Provider
      value={{
        isPopupOpen,
        openPopup,
        closePopup,
        popupPurpose,
        contactDetailsRevealed,
        revealContactDetails,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
