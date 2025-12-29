
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";

/* ---------------- CONTEXT ---------------- */
import { AuthProvider, useAuth } from "./admin/context/AuthContext";
import { NotificationProvider } from "./admin/context/NotificationContext";

import "./App.css";

/* ---------------- ADMIN ---------------- */
import Layout from "./admin/components/layout/Layout";
import Login from "./admin/pages/auth/Login";
import ContactPage from "./admin/pages/Contact";
import DashboardPage from "./admin/pages/Dashboard";
import MediaPage from "./admin/pages/Media";
import NewsPage from "./admin/pages/News";
import PressReleasePage from "./admin/pages/Press";

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
import BackToTop from "./utils/BackToTop";
import GlobalCursor from "./utils/CursorGlow";
import ScrollToTop from "./utils/ScrollToTop";

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
              <Route path="/admin/press" element={<PressReleasePage />} />
              <Route path="/admin/news" element={<NewsPage />} />
              <Route path="/admin/contact" element={<ContactPage />} />
            </Route>
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
