import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer/footer";
import ServicesPage from "./pages/services/services.page";
import PaymentPage from "./pages/payment/payment";
import AdminPage from "./pages/admin/admin.page";
import { useEffect, useState } from "react";
import SkuPage from "./pages/admin/sku/sku";
import AdminHeader from "./components/admin-header/admin-header";

function App() {
  const { pathname } = useLocation();
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  useEffect(() => {
    if (pathname.includes("admin")) {
      setIsAdminRoute(true);
    } else {
      setIsAdminRoute(false);
    }
  }, [pathname]);
  return (
    <div className={`App ${!isAdminRoute ? "moveFooter" : ""}`}>
      <ScrollToTop />
      {!isAdminRoute ? <Header /> : <AdminHeader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceName" element={<ServicesPage />} />
        <Route
          path="/services"
          element={<Navigate to="/services/E-Commerce" />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin/messages" element={<AdminPage />} />
        <Route path="/admin/skus" element={<SkuPage />} />
        <Route path="/admin" element={<Navigate to="/admin/messages" />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
