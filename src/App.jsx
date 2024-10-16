import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import HouseDetail from "./HouseDetail";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/houseDetail/:houseId" element={<HouseDetail />} />
    </Routes>
  );
}

export default App;
