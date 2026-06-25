import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const teamMembers = [
  {
    initials: "MHK",
    name: "Muhammad Hasan Khan",
    role: "Lead Senior Frontend Developer",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript","vite"],
    color: "from-cyan-400 to-green-400",
  },
  {
    initials: "RT",
    name: "Rehan Tariq",
    role: "Junior Frontend Developer",
    skills: ["React", "Bootstrap", "Javascript","HTML5","CSS3"],
    color: "from-cyan-400 to-green-400",
  },
  {
    initials: "HN",
    name: "Huraira Nasir",
    role: "senior flutter developer",
    skills: ["Flutter","Dart Language","Android & iOS Cross Platform Development"],
    color: "from-orange-400 to-pink-400",
  },
  {
    initials: "SK",
    name: "Sara Khan",
    role: "Head of Design",
    skills: ["UI/UX", "Figma", "Branding"],
    color: "from-pink-400 to-purple-400",
  },
  {
    initials: "BA",
    name: "Bilal Ahmed",
    role: "WordPress Lead",
    skills: ["WordPress", "Shopify", "SEO"],
    color: "from-yellow-400 to-green-400",
  },
  {
    initials: "AI",
    name: "Ayesha Iqbal",
    role: "SEO Specialist",
    skills: ["SEO", "GEO", "Schema"],
    color: "from-green-400 to-emerald-400",
  },
  {
    initials: "UT",
    name: "Usman Tariq",
    role: "Performance Marketer",
    skills: ["Meta Ads", "Google Ads"],
    color: "from-indigo-400 to-cyan-400",
  },
];

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#021330] py-24">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-4">
            The Team
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Meet the{" "}
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            A Professional senior team of developers, designers and marketers
            dedicated to growing your business.
          </p>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 mb-20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">

            <div className="w-28 h-28 rounded-3xl bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-[#021330] font-bold text-3xl">
              MA
            </div>

            <div className="flex-1">

              <span className="text-green-400 text-sm uppercase tracking-[3px]">
                Founder & CEO
              </span>

              <h3 className="text-white text-3xl font-bold mt-2">
                M. Abubaker
              </h3>

              <p className="text-slate-300 mt-4 leading-relaxed">
                Founder of Webglock. Helping businesses scale through
                modern websites, SEO strategies, paid advertising,
                and growth-focused digital solutions.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {["Strategy", "Business Growth", "Marketing"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          {[
            { value: "120+", label: "Projects" },
            { value: "70+", label: "Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 ring ring-transparent hover:ring-green-300/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-green-400">
                {stat.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white/5 ring ring-transparent hover:ring-green-400 transform transition-all backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${member.color} flex items-center justify-center text-[#021330] font-bold text-xl`}
              >
                {member.initials}
              </div>

              <h3 className="text-white text-xl font-semibold mt-5">
                {member.name}
              </h3>

              <p className="text-green-400 text-sm mt-1 capitalize">
                {member.role}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs capitalize"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 transition"
                >
                  <FaGlobe />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 text-center"
        >
          <h3 className="text-white text-3xl font-bold">
            Want to work with this team?
          </h3>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Tell us about your project and we'll come back
            with a growth-focused strategy.
          </p>

          <NavLink
          to={'/contact'} 
          onClick={()=>{
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
            }}
          className="glow-btn block mt-20 bg-green-400 text-[#021330] font-semibold px-8 py-4 rounded-full transition-all duration-300">
            Start a Project →
          </NavLink>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
