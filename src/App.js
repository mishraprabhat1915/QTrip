import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import AdventurePage from "./pages/AdventurePage.jsx";
import ResortPage from "./pages/ResortPage.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="AdventurePage" element={<AdventurePage />} />
        <Route path="ResortPage" element={<ResortPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
