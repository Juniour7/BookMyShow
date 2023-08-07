import { Route, Routes } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Pages
import HomePage from "./Pages/Homepage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function App() {
  return (
    <>
      <Routes>
        <DefaultHOC path="/" exact Component={HomePage} />
      </Routes>
    </>
  );
};

export default App;
