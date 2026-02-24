import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AIFloatingButton from "./Components/AIFloatingButton";
import About from "./Pages/About";
import Login from "./Pages/Admin/Login";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";

import AdminBookings from "./Pages/Admin/AdminBookings";
import AdminEvents from "./Pages/Admin/AdminEvents";
import AdminNews from "./Pages/Admin/AdminNews";
import AdminServices from "./Pages/Admin/AdminServices";
import AdminStates from "./Pages/Admin/AdminStates";
import AdminTestimonial from "./Pages/Admin/AdminTestimonial";
import AdminUni from "./Pages/Admin/AdminUni";
import Book from "./Pages/Book";
import Checklists from "./Pages/Checklists";
import ClientDetailsForm from "./Pages/ClientDetailsForm";
import Events from "./Pages/Events";
import FAQ from "./Pages/FAQ";
import ImportantLinks from "./Pages/ImportantLinks";
import IndividualEvent from "./Pages/IndividualEvent";
import IndividualNews from "./Pages/IndividualNews";
import IndividualStates from "./Pages/IndividualStates";
import Nepal from "./Pages/Nepal";
import News from "./Pages/News";
import PartenerInstitutions from "./Pages/PartenerInstitutions";
import PRCalculator from "./Pages/PRCalculator";
import Services from "./Pages/Services";
import StarterKit from "./Pages/StarterKit";
import TaxCalculator from "./Pages/TaxCalculator";
import TaxService from "./Pages/TaxService";
import AIChat from "./Pages/AIChat";
import SuccessStories from "./Pages/SuccessStories";

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
      {!location.pathname.includes("admin") &&
        !location.pathname.includes("nepal") && <Navbar />}
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
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/book" element={<Book />}></Route>
        <Route exact path="/tax-service" element={<TaxService />}></Route>
        <Route exact path="/starter-kit" element={<StarterKit />}></Route>{" "}
        <Route exact path="/faq" element={<FAQ />}></Route>{" "}
        <Route
          exact
          path="/partner-institutions"
          element={<PartenerInstitutions />}
        ></Route>
        <Route
          exact
          path="/important-links"
          element={<ImportantLinks />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/explore/news" element={<News />}></Route>
        <Route exact path="/news/:id" element={<IndividualNews />}></Route>
        <Route exact path="/explore/events" element={<Events />}></Route>{" "}
        <Route
          exact
          path="/explore/events/:id"
          element={<IndividualEvent />}
        ></Route>
        <Route
          exact
          path="/explore/checklists"
          element={<Checklists />}
        ></Route>
        <Route
          exact
          path="/explore/success-stories"
          element={<SuccessStories />}
        ></Route>{" "}
        <Route
          exact
          path="/explore/client-details-form"
          element={<ClientDetailsForm />}
        ></Route>
        <Route exact path="/services" element={<Services />}></Route>
        <Route exact path="/services/:id" element={<Services />}></Route>
        <Route
          exact
          path="/states/:state"
          element={<IndividualStates />}
        ></Route>
        <Route path="/pr-calculator" element={<PRCalculator />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
        <Route exact path="/nepal" element={<Nepal />} />
        <Route exact path="/ai" element={<AIChat />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {!location.pathname.includes("admin") &&
        !location.pathname.includes("nepal") && <Footer />}
      {/* AI Floating Button - Show on all public pages except admin and /ai */}
      {!location.pathname.includes("admin") &&
        !location.pathname.includes("/ai") && <AIFloatingButton />}
      <ToastContainer />
    </div>
  );
};

export default PublicRoutes;
