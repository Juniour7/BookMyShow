import { Routes, Route } from "react-router-dom";

//axios
import axios from "axios";

//Pages
import HomePage from "./Pages/Homepage";
import Movie from "./Pages/Moviepage";
import Plays from "./Pages/Playspage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/plays" element={<Plays />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes> */}
    </>
  );
};

export default App;
