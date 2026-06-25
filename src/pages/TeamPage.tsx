import Navbar from "../components/navBar";
import Footer from "../components/Footer";
import TeamHero from "../components/TeamHero";
import TeamSection from "../components/TeamSkills";

const TeamPage = () => {
  return (
    <section className="Team-page">
        {/* navbar */}
        <Navbar />
        {/* TeamHero Section */}
        <TeamHero />
        {/* Team Members Section */}
        <TeamSection />
        {/* Footer */}
        <Footer />
    </section>
  )
}

export default TeamPage