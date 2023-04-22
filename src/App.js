import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PublicRoutes from "./PublicRoutes";
import KotharProvider from "./context/provider";

const App = () => {
  return (
    <KotharProvider>
      <ToastContainer />
      <ThemeProvider>
        <Router>
          <PublicRoutes />
        </Router>
      </ThemeProvider>
    </KotharProvider>
  );
};

export default App;
