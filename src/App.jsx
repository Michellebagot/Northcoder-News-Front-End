import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticlesList/ArticlesList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ArticleCardExt from "./components/ArticleCardExtended/ArticleCardExt";
import Topics from "./components/Topics/Topics";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleCardExt />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
