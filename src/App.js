import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FloatingButton from "./Components/FloatingButton";
import ScrollToTop from "./Components/ScrollToTop";
import PublicRoutes from "./PublicRoutes";
import KotharProvider from "./context/provider";
import Banner from "./Components/TaxBanner";

const App = () => {
  return (
    <HelmetProvider>
      <KotharProvider>
        <ToastContainer />
        <ThemeProvider>
          <Router>
            <ScrollToTop />
            {/* <FloatingButton /> */}
            <PublicRoutes />
          </Router>
        </ThemeProvider>
      </KotharProvider>
    </HelmetProvider>
  );
};

export default App;
