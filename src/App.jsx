import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
