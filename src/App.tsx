import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Construction } from "./pages/construction";
import { NotFound } from "./pages/errors";
import "./app.css";

function App() {

  return (
    <>
      <Router>
        <div className="h-dvh bg-[#292929]">
          <Routes>
            <Route path="/" element={<Construction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App


//import reactLogo from './assets/react.svg'
//<img src={reactLogo} className="logo react" alt="React logo" />