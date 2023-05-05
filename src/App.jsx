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
import { connect } from "react-redux";
import Flash from "./components/flash/flash";
import AllPaymentsPage from "./pages/admin/all-payments/all-payments";

function App({ flash }) {
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
      {flash?.type && <Flash type={flash?.type} message={flash?.message} />}
      <Header />
      {isAdminRoute && <AdminHeader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceName" element={<ServicesPage />} />
        <Route
          path="/services"
          element={<Navigate to="/services/E-Commerce" />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin/payments" element={<AllPaymentsPage />} />
        <Route path="/admin/messages" element={<AdminPage />} />
        <Route path="/admin/skus" element={<SkuPage />} />
        <Route path="/admin" element={<Navigate to="/admin/messages" />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

const mapProps = (state) => ({
  flash: state.flash,
});
export default connect(mapProps)(App);
