import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KotharProvider from "./context/provider";
import PublicRoutes from "./PublicRoutes";
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <KotharProvider>
      <ThemeProvider>
        <Router>
          <PublicRoutes />
        </Router>
      </ThemeProvider>
    </KotharProvider>
  );
};

export default App;
