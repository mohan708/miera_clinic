import Image from "next/image";
import First_comp from "./components/First_comp";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Footer from "./components/Footer";

export default function Home() {
  return (
 
   <main>

          <Navbar />
          <First_comp />
          <Second />
          <Third />
          <Fourth />
          <Fifth />
          <Sixth />
          <Footer />


   </main>
  
  );
}
