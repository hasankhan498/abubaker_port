import Navbar from "../components/navBar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="Portfolio-page">
        {/* navbar */}
        <Navbar />
        {/*Contact hero Section */}
        <ContactHero />
        {/* COntact main Section */}
        <ContactForm />
        {/* Footer */}
        <Footer />
    </section>
  )
}

export default Contact