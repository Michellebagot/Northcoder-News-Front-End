import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticlesList/ArticlesList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ArticleCardExt from "./components/ArticleCardExtended/ArticleCardExt";

function App() {

  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path='/articles/:article_id' element={<ArticleCardExt />} />
      </Routes>
    </>
  );
}

export default App;
