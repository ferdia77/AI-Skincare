import Home from "./Pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testing from "./Pages/Testing.jsx";
import Result from "./Pages/Result.jsx";
import SelectionScreen from "./Pages/SelectionScreen.jsx";
import Scan from "./Pages/Scan.jsx";
import { Toaster } from "./components/ui/toaster.js";
import Introduction from "./Pages/Introduction.jsx";

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
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
