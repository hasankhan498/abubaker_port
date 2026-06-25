import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";
import image from "../../public/avatar.png"
import { NavLink } from "react-router-dom";


interface Project {
  initials: string;
  title: string;
  category: string;
  result: string;
  description: string;
  img: string;
  link: string;
}
const projects: Project[] = [
  {
    initials: "LA",
    title: "Lumen Apparel",
    category: "Shopify",
    result: "+220% Revenue",
    description: "Custom Shopify store generating 3.2x more revenue.",
    img: image,
    link:"mksdm",
  },
  {
    initials: "KL",
    title: "Karachi Legal Partners",
    category: "WordPress",
    result: "+180% Leads",
    description: "Law firm website with automated lead generation.",
    img: image,
    link:"mksdm",
  },
  {
    initials: "VC",
    title: "Vapes Cluster",
    category: "Custom Web",
    result: "1k Daily visitors",
    description: "Real-time Product based dashboard without huge Ecommerce Eco system of Vapes and dispatch.",
    img: image,
    link:"https://www.vapescluster.com/",
  },
  {
    initials: "SB",
    title: "Saffron Beauty",
    category: "Meta Ads",
    result: "5.8 ROAS",
    description: "Performance marketing campaign for skincare brand.",
    img: image,
    link:"mksdm",
  },
  {
    initials: "PH",
    title: "PakHomes Realty",
    category: "SEO + GEO",
    result: "Top 3 SERP",
    description: "SEO & GEO strategy increasing organic visibility.",
    img: image,
    link:"mksdm",
  },
  {
    initials: "TD",
    title: "Tiffin Daily",
    category: "Mobile App",
    result: "50k Installs",
    description: "Food delivery mobile app for iOS & Android.",
    img: image,
    link:"mksdm",
  },
];


interface statsType {
  icon: React.ReactNode;
  value: string;
  label: string
}
const stats: statsType[] = [
  {
    icon: <TrendingUp size={28} />,
    value: "500k+",
    label: "Leads Generated",
  },
  {
    icon: <Users size={28} />,
    value: "70+",
    label: "Happy Clients",
  },
  {
    icon: <Briefcase size={28} />,
    value: "120+",
    label: "Projects Delivered",
  },
];

const Portfolio = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#021330]">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-4">
            Our Work
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Results That Speak
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
            Every project is built with one goal:
            helping businesses grow faster online.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
    group
    overflow-hidden
    rounded-[28px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    hover:border-green-400/30
    hover:shadow-[0_0_35px_rgba(74,222,128,0.15)]
    transition-all
  "
            >


              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>
              </div>



              {/* Thumbnail */}
              <div
                className={`relative h-64`}
              >
                <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>

                <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {project.result}
                </div>

                <div className="h-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="
          text-slate-400
          group-hover:text-green-400
          group-hover:translate-x-1
          group-hover:-translate-y-1
          transition-all
          duration-300
        "
                  />
                </div>

                <p className="text-slate-400 mt-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-[24px]
                p-8
                text-center
              "
            >
              <div className="flex justify-center text-green-400 mb-4">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-24
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            lg:p-14
          "
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h3 className="text-white text-3xl font-bold">
                Have a project in mind?
              </h3>

              <p className="text-slate-400 mt-3">
                Share your idea and we'll build a growth-focused strategy
                tailored to your business.
              </p>
            </div>

            <NavLink to={'/contact'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="glow-btn bg-green-400 text-[#021330] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Get a Quote →
            </NavLink>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;