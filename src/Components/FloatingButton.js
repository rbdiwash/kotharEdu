import React, { useState, useEffect } from "react";
import { FaCalculator } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed left-4 bottom-1/3 z-50"
    >
      <div className="relative">
        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDropdown}
          className="bg-second text-white p-4 rounded-full shadow-lg hover:bg-primary transition-all duration-300 flex items-center gap-2 group"
        >
          <FaCalculator className="text-2xl" />
          {/* <span className="absolute left-16 mr-2 bg-white text-second px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Calculators
          </span> */}
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute left-16 bottom-0 mb-2 bg-white rounded-lg shadow-xl overflow-hidden w-max"
            >
              <div className="py-2 w-full">
                <Link
                  to="/pr-calculator"
                  className="px-4 py-3 text-gray-800 hover:bg-second hover:text-white transition-all duration-300 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FaCalculator className="text-second group-hover:text-white " />
                  <span>PR Points Calculator</span>
                </Link>
                <Link
                  to="/tax-calculator"
                  className="block px-4 py-3 text-gray-800 hover:bg-second hover:text-white transition-all duration-300 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FaCalculator className="text-second group-hover:text-white" />
                  <span>Tax Calculator</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FloatingButton;
