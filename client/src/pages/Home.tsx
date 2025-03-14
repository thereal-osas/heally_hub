import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Affiliations from "../components/Affiliations";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0eded]">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Affiliations />
      <Footer />
      <ChatButton />
    </div>
  );
}
