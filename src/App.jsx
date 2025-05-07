import Home from "./Pages/Home";
import TakeTheTest from "./Pages/TakeTheTest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./Pages/Testing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TakeTheTest" element={<TakeTheTest />} />
        <Route path="/Testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
