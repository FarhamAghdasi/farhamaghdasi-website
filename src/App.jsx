import React, { useEffect , useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

/**
 * Import CSS
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
import "./assets/css/common_style.css";
import "./assets/css/font.css";
import "./assets/css/inner_pages.css";
import "./assets/css/personal.css";
import 'themify-icons/themify-icons/themify-icons.css';
import WOW from 'wowjs';

/**
 * Import Pages
 */
import { Home, AboutPage, BlogPage, BlogInfo, HtmlTemplates, ServicesPage, WorksPage, Htmlinfo, PortfolioInfo, Contact , Page404 , MaintenancePage } from './pages';

/**
 * Component for setting background images and colors
 */
const BackgroundSetter = () => {
  const location = useLocation();

  useEffect(() => {
    // تنظیم تصاویر پس‌زمینه
    const pageSections = document.querySelectorAll('.bg-img, section');
    pageSections.forEach((section) => {
      const background = section.getAttribute('data-background');
      if (background) {
        section.style.backgroundImage = `url(${background})`;
      }
    });

    // تنظیم رنگ‌های پس‌زمینه
    const pageSectionsColor = document.querySelectorAll('.bg-solid-color, section');
    pageSectionsColor.forEach((section) => {
      const color = section.getAttribute('data-solid-color');
      if (color) {
        section.style.backgroundColor = color;
      }
    });
  }, [location]); // وابستگی به location

  return null; // این کامپوننت هیچ JSX ای را برنمی‌گرداند
};
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0); // اسکرول صفحه به بالاترین نقطه
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW().init();
  }, []);

  const [isMaintenance, setIsMaintenance] = useState(true); // Set to true for maintenance mode
  const maintenancePages = [

  ];

  return (
    <Router>
    <BackgroundSetter />
    <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={maintenancePages.includes('/') && isMaintenance ? <MaintenancePage /> : <Home />}
      />
      <Route
        path="/about/"
        element={maintenancePages.includes('/about') && isMaintenance ? <MaintenancePage /> : <AboutPage />}
      />
      <Route
        path="/blog/"
        element={maintenancePages.includes('/blog') && isMaintenance ? <MaintenancePage /> : <BlogPage />}
      />
      <Route
        path="/blog/:url/"
        element={maintenancePages.includes('/blog/:url') && isMaintenance ? <MaintenancePage /> : <BlogInfo />}
      />
      <Route
        path="/html-templates/"
        element={maintenancePages.includes('/html-templates') && isMaintenance ? <MaintenancePage /> : <HtmlTemplates />}
      />
      <Route
        path="/html-templates/:slug/"
        element={maintenancePages.includes('/html-templates/:url') && isMaintenance ? <MaintenancePage /> : <Htmlinfo />}
      />
      <Route
        path="/services/"
        element={maintenancePages.includes('/services') && isMaintenance ? <MaintenancePage /> : <ServicesPage />}
      />
      <Route
        path="/portfolio/"
        element={maintenancePages.includes('/portfolio') && isMaintenance ? <MaintenancePage /> : <WorksPage />}
      />
      <Route
        path="/portfolio/:url/"
        element={maintenancePages.includes('/portfolio/:url') && isMaintenance ? <MaintenancePage /> : <PortfolioInfo />}
      />
      <Route
        path="/contact/"
        element={maintenancePages.includes('/contact') && isMaintenance ? <MaintenancePage /> : <Contact />}
      />
      <Route
        path="*"
        element={<Page404 />}
      />
      </Routes>
    </Router>

  );
};

export default App;
