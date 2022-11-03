import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Utils/ScrollToTop";
import Login from "./Pages/Admin/Login";
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
import Admin from "./Pages/Admin/Admin";

const PublicRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");


  const checkLoggedIn = (component) => {
    if (!token) {
      return <Navigate replace to="/login" />;
    } else {
      return component;
    }
  };

  return (
    <div>
      <ScrollToTop />
      {!location.pathname.includes("admin") && <Navbar />}
      <Routes>
        <Route
          exact
          path="/admin"
          element={checkLoggedIn(<Admin />)}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/book" element={<Book />}></Route>
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/explore/news" element={<News />}></Route>
        <Route exact path="/news/:id" element={<IndividualNews />}></Route>
        <Route exact path="/explore/events" element={<Events />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/services/:id" element={<Services />}></Route>
        <Route
          exact
          path="/states/:state"
          element={<IndividualStates />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {!location.pathname.includes("admin") && <Footer />}
      <ToastContainer />
    </div>
  );
};

export default PublicRoutes;
