import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import StackPage from "./StackPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stack" element={<StackPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
