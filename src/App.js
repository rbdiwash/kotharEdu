import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KotharProvider from "./context/provider";
import PublicRoutes from "./PublicRoutes";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <KotharProvider>
      <ToastContainer />
      <ThemeProvider>
        <HashRouter>
          <PublicRoutes />
        </HashRouter>
      </ThemeProvider>
    </KotharProvider>
  );
};

export default App;
