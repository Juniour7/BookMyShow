import { Route, Routes } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Component
import Temp from "./components/temp";

function App() {
  return (
    <>
      <Routes>
        <DefaultHOC path="/" exact component={Temp} />
      </Routes>
    </>
  );
};

export default App;
