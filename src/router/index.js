import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import { Dashboard, Login, ProfilePage, Register } from "../pages";
import DetailGame from "../pages/DetailGame";

const Routing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail-page" element={<DetailGame />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Routing;
