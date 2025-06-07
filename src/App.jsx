import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Index from './pages/Index'
import Home from "./pages/Home";
import PricingSection from './components/PricingSection';
import ScrollToTop from "./ScrollToTop";
import NotFound from "./pages/NotFound";
import BlogsPage from "./pages/BlogsPage";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Payment from "./pages/Payment";

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} >
            <Route index element={< Home />} />
            <Route path="/pricing" element={< PricingSection />} />
          </Route>
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default App
