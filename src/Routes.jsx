import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import IDE from "./components/Code editor/IDE";
// import Prac from "./components/practice/prac";
import Playground from "./components/practice/Playground";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/ide" element={<IDE />} />
      <Route path="/prac" element={<Playground/>}></Route>
    </Routes>
  );
}
