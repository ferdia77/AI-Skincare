"use client" 

import Home from "./Pages/Home";
import TakeTheTest from "./Pages/TakeTheTest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./Pages/Testing";
import Result from "./Components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TakeTheTest" element={<TakeTheTest />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
