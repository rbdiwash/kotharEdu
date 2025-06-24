import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PublicRoutes from "./PublicRoutes";
import KotharProvider from "./context/provider";
import ScrollToTop from "./Components/ScrollToTop";
import FloatingButton from "./Components/FloatingButton";
import TaxBanner from "./Components/TaxBanner";
import PRCalculator from "./Pages/PRCalculator";
import TaxCalculator from "./Pages/TaxCalculator";

const App = () => {
  return (
    <KotharProvider>
      <ToastContainer />
      <ThemeProvider>
        <Router>
          <TaxBanner />
          <ScrollToTop />
          <FloatingButton />
          <PublicRoutes />
        </Router>
      </ThemeProvider>
    </KotharProvider>
  );
};

export default App;
