import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import bannerImage from "../assets/images/nepal_banner.jpeg";

const NepalBanner = ({
  redirectLink = "https://kotharedu.com/nepal/#contact",

  imageUrl = bannerImage,
  localStorageKey = "nepalBannerClosed",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
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
      console.error("NepalBanner: Error checking localStorage:", error);
      // If there's an error with localStorage, show the banner anyway
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [localStorageKey]);

  const handleClose = () => {
    setIsClosed(true);
    // Store in localStorage so banner doesn't show again
    try {
      localStorage.setItem(localStorageKey, "true");
      // Dispatch custom event to notify navbar
      window.dispatchEvent(new Event("nepalBannerClosed"));
    } catch (error) {
      console.error("NepalBanner: Error saving to localStorage:", error);
    }
  };

  const handleImageClick = () => {
    // Store in localStorage and close banner
    try {
      localStorage.setItem(localStorageKey, "true");
      // Dispatch custom event to notify navbar
      window.dispatchEvent(new Event("nepalBannerClosed"));
    } catch (error) {
      console.error("NepalBanner: Error saving to localStorage:", error);
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
      window.dispatchEvent(new Event("nepalBannerClosed"));
    } catch (error) {
      console.error("NepalBanner: Error saving to localStorage:", error);
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
      className={`fixed inset-0 z-[200] transition-all duration-500 ease-in-out md:w-content ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Banner content */}
      <div className="flex items-center justify-center p-4 mx-auto">
        {/* Main content */}
        <div className="relative p-6 flex flex-col items-center bg-white rounded-2xl shadow-2xl w-max">
          {/* Large clickable image - half screen size */}
          <button
            onClick={handleClose}
            className="p-2 text-gray-800 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200 absolute top-0 right-0"
            aria-label="Close banner"
          >
            <FaTimes className="text-xl" />
          </button>
          <div className="flex justify-center mb-6">
            <div
              className="w-full  md:h-full rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
              onClick={handleImageClick}
            >
              <img
                loading="lazy"
                src={imageUrl}
                alt="Tax Services"
                className="h-full md:h-[70vh] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Explore Tax Services button at bottom */}
          <div className="w-full flex justify-center border-t border-gray-200 pt-4">
            <button onClick={handleExploreClick} className="btn">
              Register Now
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NepalBanner;
