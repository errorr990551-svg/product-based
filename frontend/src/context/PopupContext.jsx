import React, { createContext, useContext, useState, useEffect } from "react";

const PopupContext = createContext();

// localStorage throws when site data is blocked; the popup must still work then
const readRevealed = () => {
  try {
    return localStorage.getItem("contactDetailsRevealed") === "true";
  } catch {
    return false;
  }
};

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPurpose, setPopupPurpose] = useState("default");
  const [contactDetailsRevealed, setContactDetailsRevealed] = useState(readRevealed);

  // Auto open after reload (your existing behavior)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only auto-open if contact details haven't been revealed yet
      // The enquiry popup is the main lead source: it opens on every page
      if (!readRevealed() && !window.__PRERENDER__) {
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
    try {
      localStorage.setItem("contactDetailsRevealed", "true");
    } catch {
      // storage blocked: the details stay revealed for this visit only
    }
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
