import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import HouseDetail from "./HouseDetail";

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <img src="/logo.svg" alt="home logo" className="ml-10 mt-5" />
        </Link>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/houseDetail/:houseId" element={<HouseDetail />} />
      </Routes>
    </>
  );
}

export default App;
