import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import {
  Home,
  Login,
  ProfilePage,
  Register,
  DetailGame,
  Room,
  PlayGame,
  RpsGame,
} from "../pages";

const Routing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-page" element={<DetailGame />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:roomId" element={<RpsGame />} />
        <Route path="/playgame" element={<PlayGame />} />
      </Routes>
    </div>
  );
};

export default Routing;
