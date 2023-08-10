import { BrowserRouter, Routes, Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/MovieHOC";

//Pages
import HomePage from "./Pages/Homepage";
import Movie from "./Pages/Moviepage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <DefaultHOC index element={<HomePage />} />
          <MovieHOC path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
