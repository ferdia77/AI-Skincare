import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./pages/Testing.jsx";
import Result from "./pages/Result.jsx";
import SelectionScreen from "./pages/SelectionScreen.jsx";
import Scan from "./pages/Scan.jsx";
import Introduction from "./pages/Introduction.jsx";
import Final from "./pages/Final.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Select" element={<SelectionScreen />} />
        <Route path="/Scan" element={<Scan />} />
        <Route path="/Final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
