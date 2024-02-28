import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Banner from "./components/Banner/Banner.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";

import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Banner />
      <Services />
      <About handleOrderPopup = {handleOrderPopup} />
      <Banner />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> 
    </div>
  );
};

export default App;
