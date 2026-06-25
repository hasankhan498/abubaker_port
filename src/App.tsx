import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Team from "./pages/TeamPage";
import Portfolio from "./pages/PortfolioPage";
import Contact from "./pages/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;