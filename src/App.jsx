import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <>
      <Header setTopic={setTopic} topic={topic} />
      <Routes>
        <Route path="/articles" element={<Articles topic={topic} />} />
      </Routes>
    </>
  );
}

export default App;
