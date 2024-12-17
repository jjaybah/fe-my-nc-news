import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
