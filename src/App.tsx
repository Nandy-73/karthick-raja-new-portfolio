import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // adjust path if needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
