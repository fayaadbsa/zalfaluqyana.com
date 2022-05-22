import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
