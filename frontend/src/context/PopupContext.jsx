import React, { createContext, useContext, useState, useEffect } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Auto open after reload (your existing behavior)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
