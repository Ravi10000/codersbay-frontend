import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Payment from "./pages/Payment";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer/footer";
import ServicesPage from "./pages/services/services.page";
import PaymentPage from "./pages/payment/payment";
import AdminPage from "./pages/admin/admin.page";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceName" element={<ServicesPage />} />
        <Route
          path="/services"
          element={<Navigate to="/services/E-Commerce" />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
