import React, { useEffect } from "react";
import ChooseUs from "./ChooseUs";
import Ourplans from "./Ourplans";
import DownloadourApp from "./DownloadourApp";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import Whatsap from "../components/Whatsap";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <ChooseUs />
      <Ourplans />

     <About/>
     <Testimonials/>
      <DownloadourApp />
<Faq/>
      
      <Whatsap />

    </div>
  );
}

export default Home;
