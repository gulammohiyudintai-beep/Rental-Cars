

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route
          path="*"
          element={
            <p className="text-center py-20 text-gray-500">
              404 — Page not found
            </p>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;