import Home from "./Pages/Home";
import TakeTheTest from "./Pages/TakeTheTest";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TakeTheTest" element={<TakeTheTest />} />
      </Routes>
    </Router>
  );
}

export default App;
