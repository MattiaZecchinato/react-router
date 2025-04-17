import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main layout
import MainLayout from "./layouts/MainLayout";
// Home page
import HomePage from "./pages/HomePage";
// About us
import AboutUs from "./pages/AboutUs";
// Post list
import PostList from "./pages/PostList";
// Single Post
import Post from "./pages/Post";

function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/PostList" element={<PostList />} />
            <Route path="/PostList/:id" element={<Post />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
