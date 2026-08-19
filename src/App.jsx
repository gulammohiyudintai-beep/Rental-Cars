// import { BrowserRouter, Route, Router } from "react-router-dom";
// // import CarsSection from "./component/CarsSection";
// // import CTABanner from "./component/CTABanner";
// // import Footer from "./component/Footer";
// // // import Hero from "./component/Hero";
// // import Location from "./component/Location";
// import Navbar from "./Component/Navbar";
// // import PopularLocations from "./component/PopularLocations ";
// // import Testimonials from "./component/Testimonials";
// // import WhyChooseUs from "./component/WhyChooseUs";


// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Router>
//       <Route path="/" element={<Navbar/>}/>
//     </Router>
//     </BrowserRouter>

//     </>
//   );
// }

// export default App;



// {/* <Navbar />
//       <Hero />
//       <Location/>
//       <CarsSection/>
//       <WhyChooseUs/>
//       <PopularLocations/>
//       <Testimonials />
//       <CTABanner />


//       <Footer /> */}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Cars from "./Pages/Cars";
import CarDetails from "./Pages/CarDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
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