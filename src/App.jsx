import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home page
import HomePage from "./components/HomePage";
// About us
import AboutUs from "./components/AboutUs";
// Post list
import PostList from "./components/PostList";
// Nav bar
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />
        
        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PostList" element={<PostList />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
