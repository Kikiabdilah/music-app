import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<h1 className="text-white p-6">Profile Page (Coming Soon)</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
