import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Construction } from "./pages/construction";
import { NotFound } from "./pages/errors";
import { Home } from "./pages/home";
import "./app.css";

function App() {

  return (
    <>
      <Router>
        <div className="h-dvh bg-[#292929] text-[#f4f4f4] font-display">
          <Routes>
            <Route path="/" element={<Construction />} />
            <Route path="/beta" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
