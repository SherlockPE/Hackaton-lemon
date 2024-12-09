"use client";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Index from "./principal/Index";
import About_us from "./about_us/about_us";
import { BoxForm } from "./form/box_form";
import Get_input from "./form/Get_Input";

export default function Home() {
  // const { openAccountModal } = useRkAccountModal();
  // const account = useAccount();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O un componente de carga
  }

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<About_us />} />
          <Route path="/form" element={<><BoxForm /></>}/>
          <Route path="/form/input" element={ <> <Get_input /></>}/>
        </Routes>
      </Router>
    </>
  );
}
