import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center" onClick={() => navigate("/")}>
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">BriqLabs</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
        {/*
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 px-3">
                <button onClick={() => scrollToSection("#solutions")} className="block w-full text-left py-2 px-3 rounded-md hover:bg-blue-50 transition-colors">AI Integration</button>
                <button onClick={() => scrollToSection("#solutions")} className="block w-full text-left py-2 px-3 rounded-md hover:bg-blue-50 transition-colors">Data Analytics</button>
                <button onClick={() => scrollToSection("#solutions")} className="block w-full text-left py-2 px-3 rounded-md hover:bg-blue-50 transition-colors">Process Automation</button>
              </div>
            </div>
          </div>
        */}
          <button onClick={() => scrollToSection("#features")} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
          <button onClick={() => scrollToSection("#process")} className="text-gray-700 hover:text-blue-600 transition-colors">How it Works</button>
          <button onClick={() => scrollToSection("#blog")} className="text-gray-700 hover:text-blue-600 transition-colors">Blog</button>
          <button onClick={() => scrollToSection("#security")} className="text-gray-700 hover:text-blue-600 transition-colors">Security</button>
          <button onClick={() => scrollToSection("#pricing")} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
          <button onClick={() => scrollToSection("#faq")} className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate("/pricing")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col space-y-4">
          {/*
          
            <div className="border-b border-gray-100 pb-2 mb-2">
              <button onClick={() => setIsMenuOpen(false)} className="flex justify-between items-center w-full text-left py-2 px-4 rounded-md hover:bg-blue-50">
                Solutions <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 py-2">
                <button onClick={() => { scrollToSection("#solutions"); setIsMenuOpen(false); }} className="block py-2 px-4 rounded-md hover:bg-blue-50">AI Integration</button>
                <button onClick={() => { scrollToSection("#solutions"); setIsMenuOpen(false); }} className="block py-2 px-4 rounded-md hover:bg-blue-50">Data Analytics</button>
                <button onClick={() => { scrollToSection("#solutions"); setIsMenuOpen(false); }} className="block py-2 px-4 rounded-md hover:bg-blue-50">Process Automation</button>
              </div>
            </div>

            */}
            <button onClick={() => { scrollToSection("#features"); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-md">Features</button>
            <button onClick={() => { scrollToSection("#process"); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-md">How it Works</button>
            <button onClick={() => { scrollToSection("#blog"); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-md">Blog</button>
            <button onClick={() => { scrollToSection("#security"); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-md">Security</button>
            <button onClick={() => { scrollToSection("#pricing"); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-md">Pricing</button>
            <button onClick={() => { scrollToSection("#faq"); setIsMenuOpen(false); }} className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded-md">FAQ</button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              onClick={() => navigate("/pricing")}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
