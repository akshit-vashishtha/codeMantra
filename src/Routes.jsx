import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import IDE from "./components/Code editor/IDE";
// import Prac from "./components/practice/prac";
import Playground from "./components/practice/Playground";
import ProblemList from "./components/practice/ProblemList";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/ide" element={<IDE />} />
      <Route path="/prac" element={<ProblemList/>}></Route>
      <Route path="/playground/:sno" element={<Playground />} />
    </Routes>
  );
}
