import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import AllBookmarks from "./components/AllBookmarks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post/:id/*" element={<Post />} />
      <Route path="bookmark/all" element={<AllBookmarks />} />
    </Routes>
  );
}

export default App;
