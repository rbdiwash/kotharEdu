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

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
