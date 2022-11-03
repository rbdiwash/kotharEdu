import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Utils/ScrollToTop";
import Login from "./Pages/Admin/Login";
import Admin from "./Pages/Admin/Admin";
import { ToastContainer } from "react-toastify";
import NotFound from "./Pages/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "./Pages/Book";
import Events from "./Pages/Events";
import News from "./Pages/News";
import IndividualNews from "./Pages/IndividualNews";
import IndividualStates from "./Pages/IndividualStates";
import Services from "./Pages/Services";
import KotharProvider from "./context/provider";
import PublicRoutes from "./PublicRoutes";

const App = () => {
  return (
    <KotharProvider>
      <Router>
        <PublicRoutes />
      </Router>
    </KotharProvider>
  );
};

export default App;
