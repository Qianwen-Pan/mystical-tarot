import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CommingSoon from "./pages/CommingSoon/CommingSoon";
import Game from "./pages/Game/Game";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<CommingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
