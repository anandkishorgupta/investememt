
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";

/* ---------------- CONTEXT ---------------- */
import { AuthProvider, useAuth } from "./admin/context/AuthContext";
import { NotificationProvider } from "./admin/context/NotificationContext";

import "./App.css";
const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;

/* ---------------- ADMIN ---------------- */
import Layout from "./admin/components/layout/Layout";
import Login from "./admin/pages/auth/Login";
import ContactPage from "./admin/pages/Contact";
import DashboardPage from "./admin/pages/Dashboard";
import Directors from "./admin/pages/Directors";
import MediaPage from "./admin/pages/Media";
import NewsPage from "./admin/pages/News";
import PressReleasePage from "./admin/pages/Portfolio";
import Team from "./admin/pages/Team";


/* ---------------- PUBLIC ---------------- */
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetails from "./Pages/PortfolioDetails";
import Teams from "./Pages/Teams";

/* ---------------- UTILS ---------------- */
import Invest from "./Pages/Invest";
import BackToTop from "./utils/BackToTop";
import GlobalCursor from "./utils/CursorGlow";
import ScrollToTop from "./utils/ScrollToTop";
import WhatsAppFloat from "./utils/WhatsAppFloat";

/* =====================================================
   AUTH GUARDS
===================================================== */

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const ProtectedRoute = () => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) return <Loader />;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) return <Loader />;
  return !isLoggedIn ? <Outlet /> : <Navigate to="/admin" replace />;
};

/* =====================================================
   LAYOUTS
===================================================== */

const PublicLayout = () => (

  <div className="overflow-x-hidden">
    <GlobalCursor />
    <ScrollToTop />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
    <WhatsAppFloat
      phone={whatsappPhone}
      message="Hi, I'm interested in your services"
      position="right"
      tooltipText="Need help? Chat now!"
    />
  </div>
);

const AdminLayout = () => (
  <NotificationProvider>
    <Layout>
      <Outlet />
    </Layout>
  </NotificationProvider>
);

/* =====================================================
   APP
===================================================== */

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          {/* ---------------- PUBLIC WEBSITE ---------------- */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/portfolio/:id" element={<PortfolioDetails />} />
            <Route path="/teams" element={<Teams />} />
          </Route>

          {/* ---------------- AUTH ---------------- */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* ---------------- ADMIN PANEL ---------------- */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<DashboardPage />} />
              <Route path="/admin/media" element={<MediaPage />} />
              <Route path="/admin/portfolio" element={<PressReleasePage />} />
              <Route path="/admin/Directors" element={<Directors />} />
              <Route path="/admin/news" element={<NewsPage />} />
              <Route path="/admin/contact" element={<ContactPage />} />
              <Route path="/admin/Team" element={< Team />} />


            </Route>
          </Route>

        </Routes>
      </AuthProvider>


    </Router>
  );
};

export default App;
