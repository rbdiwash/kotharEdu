import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  HashRouter,
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
import AdminNews from "./Pages/Admin/AdminNews";
import AdminTestimonial from "./Pages/Admin/AdminTestimonial";
import AdminUni from "./Pages/Admin/AdminUni";
import AdminStates from "./Pages/Admin/AdminStates";
import AdminServices from "./Pages/Admin/AdminServices";
import AdminBookings from "./Pages/Admin/AdminBookings";
import AdminEvents from "./Pages/Admin/AdminEvents";
import ImportantLinks from "./Pages/ImportantLinks";

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
    <div id="overlay">
      {/* <ScrollToTop /> */}
      {!location.pathname.includes("admin") && <Navbar />}
      <Routes>
        <Route
          exact
          path="/admin"
          element={checkLoggedIn(<AdminStates />)}
        ></Route>
        <Route
          exact
          path="/admin/news"
          element={checkLoggedIn(<AdminNews />)}
        ></Route>
        <Route
          exact
          path="/admin/events"
          element={checkLoggedIn(<AdminEvents />)}
        ></Route>
        <Route
          exact
          path="/admin/testimonials"
          element={checkLoggedIn(<AdminTestimonial />)}
        ></Route>
        <Route
          exact
          path="/admin/universities"
          element={checkLoggedIn(<AdminUni />)}
        ></Route>
        <Route
          exact
          path="/admin/bookings"
          element={checkLoggedIn(<AdminBookings />)}
        ></Route>
        <Route
          exact
          path="/admin/services"
          element={checkLoggedIn(<AdminServices />)}
        ></Route>
        <Route
          exact
          path="/admin/states"
          element={checkLoggedIn(<AdminStates />)}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/book" element={<Book />}></Route>
        <Route
          exact
          path="/important-links"
          element={<ImportantLinks />}
        ></Route>
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
