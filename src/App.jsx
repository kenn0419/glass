import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Thanks from "./page/Thanks";
import "./App.css";

function App() {
  return (
    <div className="w-[420px] mx-auto min-h-screen border relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
