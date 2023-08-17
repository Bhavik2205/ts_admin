import Dashboard from "Screens/Dashboard/Dashboard";
import Login from "Screens/Login/Login";
import Register from "Screens/Register/Register";
import Navbar from "Components/Navbar/Navbar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Saisei from "Screens/Saisei/Saisei";
import Pro from "Screens/Pro/Pro";
import Admin from "Screens/Admin/Admin";
import Setting from "Screens/Setting/Setting";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saisei" element={<Saisei />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
