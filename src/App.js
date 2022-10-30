import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
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

const App = () => {
  return (
    <KotharProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/book" element={<Book />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/news" element={<News />}></Route>
          <Route exact path="/news/:id" element={<IndividualNews />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/services/:id" element={<Services />}></Route>
          <Route
            exact
            path="/states/:state"
            element={<IndividualStates />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </KotharProvider>
  );
};

export default App;
