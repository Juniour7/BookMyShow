import { Routes, Route } from "react-router-dom";

//HOC
import { DefaultHOC } from "./HOC/Default.HOC";
import { MovieHOC } from "./HOC/MovieHOC";

//Pages
import HomePage from "./Pages/Homepage";
import Movie from "./Pages/Moviepage";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes> */}
    </>
  );
};

export default App;
