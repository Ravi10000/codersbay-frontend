import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Payment from "./pages/Payment";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer/footer";
import ServicesPage from "./pages/services/services.page";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
