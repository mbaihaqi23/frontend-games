import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import { Home, Login, Register } from "../pages";

const Routing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routing;
