import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Projects from "./pages/Projects";
import Test from "./pages/test";


const App = () => {
  return (
    <Router>
      <div className="relative bg-black h-full  text-white">
        <Header /> {/* Common Header */}
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pro" element={<Test />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
