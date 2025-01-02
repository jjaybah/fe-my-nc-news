import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="*" exact={true} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
