import "../../App.css";
import TopBar from "../../components/ui/TopBar";
import Hero from "../../components/ui/Hero";
import SafeReliable from "../../components/ui/SafeReliable";
import WhyUs from "../../components/ui/WhyUs";
import Transport from "../../components/ui/Transport";
import Testimonial from "../../components/ui/Testimonial";
import WhyChoose from "../../components/ui/WhyChoose";

function App() {
  return (
    <>
      <TopBar />
      <Hero />
      <SafeReliable />
      <WhyUs />
      <Transport />
      <Testimonial />
      <WhyChoose />
    </>
  );
}

export default App;
