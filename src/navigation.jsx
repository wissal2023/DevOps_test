// src/navigation.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Propos from "./pages/Propos";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const AppNavigation = () => {
  return (
    <Routes>       
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />    
        <Route path="/propos" element={<Propos />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppNavigation;