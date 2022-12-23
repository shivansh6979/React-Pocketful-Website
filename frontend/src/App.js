import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import HomePage from "./components/HomePage.js";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
