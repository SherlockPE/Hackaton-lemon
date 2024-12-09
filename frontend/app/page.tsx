"use client";

import { useRkAccountModal } from "@/lib/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Index from "./principal/Index";
import About_us from "./about_us/about_us";
import { BoxForm } from "./form/box_form";
import Get_input from "./form/Get_Input";
import Pull_blockchain from "./form/Pull_blockchain";

export default function Home() {
  const { openAccountModal } = useRkAccountModal();
  const account = useAccount();
  // console.debug({result})
  // console.log(account)
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<About_us />} />
          <Route path="/form" element={<BoxForm />} />
          <Route
            path="/form/input"
            element={
              <>
                <Get_input />
                <Pull_blockchain />
              </>
            }
          />{" "}
        </Routes>
      </Router>
    </>
  );
}
