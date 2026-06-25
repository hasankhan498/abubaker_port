import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Affordable Pricing",
    description:
      "Premium quality solutions designed for startups and growing businesses without breaking the budget.",
    icon: DollarSign,
  },
  {
    title: "Professional Solutions",
    description:
      "Clean code, scalable architecture and industry best practices that stand the test of time.",
    icon: ShieldCheck,
  },
  {
    title: "Business Growth Focused",
    description:
      "Every website, campaign and strategy is built around measurable business results.",
    icon: TrendingUp,
  },
  {
    title: "Dedicated Support",
    description:
      "Work directly with the team behind your project and get help whenever you need it.",
    icon: Headphones,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#021330] py-24">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-green-400 font-semibold">
            Why Webglock
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Reasons Businesses Choose Us
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            We don't just build websites. We create digital systems
            that help businesses attract customers, generate leads,
            and grow online.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-8
                  transition-all
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-green-400/10
                    to-transparent
                  "
                />

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-400
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    size={28}
                    className="text-[#021330]"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed max-w-4xl mx-auto">
            "From launching your website to scaling your business,
            we become your digital growth partner."
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <NavLink
            to={'/contact'}
            onClick={()=>{
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
            }}
             className="glow-btn bg-green-400 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
              Start a Project →
            </NavLink>

            <NavLink 
            to={'/team'}
            onClick={()=>{
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
            }}
            className="border border-slate-600 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300">
              Meet Our Team
            </NavLink>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;