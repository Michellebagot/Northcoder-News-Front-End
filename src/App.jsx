import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticlesList/ArticlesList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
