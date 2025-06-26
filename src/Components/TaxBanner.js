import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import taxBannerImage from "../assets/images/tax-banner.png";

const TaxBanner = ({
  redirectLink = "https://kothar.oneon.au/",
  title = "Tax Services for FY 2024-25",
  description = "Get expert tax assistance and use our tax calculator for accurate calculations",
  imageEmoji = "💰",
  imageUrl = taxBannerImage,
  localStorageKey = "taxBannerClosed",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // TEMPORARY: Clear localStorage for testing to ensure banner shows
    try {
      localStorage.removeItem(localStorageKey);
    } catch (error) {}

    try {
      // Check if banner was previously closed
      const bannerClosed = localStorage.getItem(localStorageKey);

      if (!bannerClosed) {
        // Show banner after a short delay
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        setIsClosed(true);
      }
    } catch (error) {
      console.error("TaxBanner: Error checking localStorage:", error);
      // If there's an error with localStorage, show the banner anyway
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [localStorageKey]);

  const handleClose = () => {
    console.log("TaxBanner: Closing banner");
    setIsClosed(true);
    // Store in localStorage so banner doesn't show again
    try {
      localStorage.setItem(localStorageKey, "true");
      // Dispatch custom event to notify navbar
      window.dispatchEvent(new Event("taxBannerClosed"));
    } catch (error) {
      console.error("TaxBanner: Error saving to localStorage:", error);
    }
  };

  const handleImageClick = () => {
    // Store in localStorage and close banner
    try {
      localStorage.setItem(localStorageKey, "true");
      // Dispatch custom event to notify navbar
      window.dispatchEvent(new Event("taxBannerClosed"));
    } catch (error) {
      console.error("TaxBanner: Error saving to localStorage:", error);
    }
    setIsClosed(true);
    // Redirect to the specified link
    window.open(redirectLink, "_blank");
  };

  const handleExploreClick = () => {
    // Store in localStorage and close banner
    try {
      localStorage.setItem(localStorageKey, "true");
      // Dispatch custom event to notify navbar
      window.dispatchEvent(new Event("taxBannerClosed"));
    } catch (error) {
      console.error("TaxBanner: Error saving to localStorage:", error);
    }
    setIsClosed(true);
    window.open(redirectLink, "_blank");
  };

  // Don't render anything if banner is closed
  if (isClosed) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[200] transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Banner content */}
      <div className="relative h-full flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <button
              onClick={handleClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
              aria-label="Close banner"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Main content */}
          <div className="p-6 flex flex-col items-center">
            {/* Large clickable image - half screen size */}
            <div className="flex justify-center w-full mb-6">
              <div
                className="md:w-[50vw] md:h-[50vh] bg-gradient-to-br from-primary to-primary2 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden"
                onClick={handleImageClick}
              >
                <img
                  src={imageUrl}
                  alt="Tax Services"
                  className="md:w-full md:h-full md:object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Explore Tax Services button at bottom */}
            <div className="w-full flex justify-center">
              <button
                onClick={handleExploreClick}
                className="bg-primary hover:bg-primary2 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
              >
                Explore Tax Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxBanner;
