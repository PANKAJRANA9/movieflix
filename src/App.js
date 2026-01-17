import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [intro, setIntro] = useState(true);

  if (intro) return <Intro onFinish={() => setIntro(false)} />;

  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
