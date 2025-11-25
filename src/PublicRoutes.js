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
import Checklists from "./Pages/Checklists";
import ClientDetailsForm from "./Pages/ClientDetailsForm";
import PRCalculator from "./Pages/PRCalculator";
import TaxCalculator from "./Pages/TaxCalculator";
import TaxService from "./Pages/TaxService";
import StarterKit from "./Pages/StarterKit";
import PartenerInstitutions from "./Pages/PartenerInstitutions";
import IndividualEvent from "./Pages/IndividualEvent";
import FAQ from "./Pages/FAQ";
import Nepal from "./Pages/Nepal";
import Banner from "./Components/TaxBanner";

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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {!location.pathname.includes("admin") &&
        !location.pathname.includes("nepal") && <Footer />}
      <ToastContainer />
    </div>
  );
};

export default PublicRoutes;
