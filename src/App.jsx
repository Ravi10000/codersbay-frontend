import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainUI from "./components/MainUI/MainUI";
import Services from "./components/Services/Services";
import TopServices from "./components/TopServices/TopServices";
import Register from "./components/RegisterImg/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewServices from "./pages/NewServices";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<NewServices />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
