import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
