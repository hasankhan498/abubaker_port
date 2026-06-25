import { motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "../../public/avatar.png"
import { NavLink } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#011126] border-t border-white/10">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-green-400 flex items-center justify-center font-bold text-[#021330]">
                W
              </div>

              <h3 className="text-white text-2xl font-bold">
                Webglock
              </h3>
            </div>

            <p className="text-slate-400 leading-relaxed">
              We help businesses grow online through
              modern websites, SEO, paid advertising,
              and custom digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {["Home", "Team", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                        })
                      }}
                      to={
                        item == "Home" ?
                          "/" :
                          `/${item.toLowerCase()}`
                      }
                      className="text-slate-400 hover:text-green-400 transition"
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>WordPress Development</li>
              <li>Shopify Development</li>
              <li>SEO Services</li>
              <li>Google Ads</li>
              <li>App Development</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <span>hello@webglock.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span>Pakistan</span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-20
            bg-white/5
            backdrop-blur-md
            border
            border-white/10
            rounded-[32px]
            p-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          <div>
            <h3 className="text-white text-2xl font-bold">
              Ready to grow your business?
            </h3>

            <p className="text-slate-400 mt-2">
              Let's build something amazing together.
            </p>
          </div>

          <NavLink
            to={'/contact'}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }}
            className="glow-btn bg-green-400 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
            Start a Project →
          </NavLink>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Webglock. All rights reserved. Website designed & developed by<span className="text-green-500 font-extrabold leading-loose tracking-wide">
              {" "}M Hasan</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-green-400 hover:text-[#021330] transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-green-400 hover:text-[#021330] transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-green-400 hover:text-[#021330] transition"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>
        </div>

      </div>

      <FloatingWhatsApp
        phoneNumber="923041539733"
        accountName="Web Glock"
        chatMessage="Hello! How can we assist you in making your dream designs?"
        darkMode
        placeholder="Type Something..."
        statusMessage="online"
        avatar={avatar}
        allowClickAway
        notification
        notificationSound
      />

    </footer >
  );
};

export default Footer;
