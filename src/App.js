import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
//import Stocks from "./components/Stocks";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/movies" Component={Movies} />
      </Routes>
    </div>
  );
}

export default App;
