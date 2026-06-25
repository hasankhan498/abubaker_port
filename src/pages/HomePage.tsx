import Navbar from "../components/navBar";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ReasonSection from "../components/reasonSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <section className="home-page">
        <Navbar />
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        {/* Services Section */}
        <ServicesSection />
        {/* Reason Section */}
        <ReasonSection />
        {/* Footer */}
        <Footer />
    </section>
  )
}

export default HomePage