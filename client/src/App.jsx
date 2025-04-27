
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
// import Signup from "./pages/signup";

import NavBar from "./components/ui/navBar";
import HeroSection from "./pages/student/heroSection";


function App() {


  return (
    <Router>
      {/* NavBar will be visible on all pages */}
      <NavBar />

      {/* Define routes */}
      <Routes>
        {/* HeroSection will be visible only on the home page */}
        <Route path="/" element={<HeroSection />} />
        
        {/* Login page route */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
);
}

export default App;
