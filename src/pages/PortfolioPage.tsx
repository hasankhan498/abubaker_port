import Navbar from "../components/navBar";
import Footer from "../components/Footer";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioProjects from "../components/PortfolioProjects";

const PortfolioPage = () => {
  return (
    <section className="Portfolio-page">
        {/* navbar */}
        <Navbar />
        {/* PortfolioHero Section */}
        <PortfolioHero />
        {/* Portfolio Projects Section */}
        <PortfolioProjects />
        {/* Footer */}
        <Footer />
    </section>
  )
}

export default PortfolioPage