import React, { useEffect } from 'react';
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
import { Home, AboutPage, BlogPage, BlogInfo, HtmlTemplates, ServicesPage, WorksPage } from './pages';

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

const App = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW().init();
  }, []);

  return (
    <Router>
      <BackgroundSetter /> {/* استفاده از کامپوننت BackgroundSetter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/blog-info/" element={<BlogInfo />} />
        <Route path="/html-templates/" element={<HtmlTemplates />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/portfolio/" element={<WorksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
