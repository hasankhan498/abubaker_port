import {
  Code2,
  ShoppingBag,
  Cog,
  Smartphone,
  Search,
  Sparkles,
  Megaphone,
  MousePointerClick,
  PlayCircle,
  DollarSign,
} from "lucide-react";

import { motion } from "framer-motion";

type servicesType = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}[];

const services: servicesType = [
  {
    title: "WordPress Development",
    desc: "Fast, secure, and SEO-friendly WordPress sites tailored to your brand.",
    icon: Code2,
  },
  {
    title: "Shopify Store Development",
    desc: "High-converting Shopify stores with custom theme work and apps.",
    icon: ShoppingBag,
  },
  {
    title: "Custom Web Development",
    desc: "Python, Node.js, PHP — bespoke web apps engineered for scale.",
    icon: Cog,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps that feel native on iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "SEO Services",
    desc: "Technical, on-page & off-page SEO that ranks and converts.",
    icon: Search,
  },
  {
    title: "GEO — Generative Engine Optimization",
    desc: "Get cited by AI search: ChatGPT, Perplexity and Google AI.",
    icon: Sparkles,
  },
  {
    title: "Meta Ads",
    desc: "Facebook & Instagram campaigns built for ROAS, not just clicks.",
    icon: Megaphone,
  },
  {
    title: "Google Ads",
    desc: "Search, Display & Performance Max campaigns managed by specialists.",
    icon: MousePointerClick,
  },
  {
    title: "YouTube Ads",
    desc: "Video campaigns that gather traffic and turn views into customers.",
    icon: PlayCircle,
  },
  {
    title: "PPC Advertising",
    desc: "Full-funnel pay-per-click strategy with transparent reporting.",
    icon: DollarSign,
  },
];

const Services = () => {
  return (
    <section className="relative py-24 bg-[#f8f9fb] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-green-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-green-500 font-bold">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#021330]">
            Everything you need to grow online
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Web, mobile, search and paid media — under one roof.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  bg-white
                  rounded-[30px]
                  border
                  border-slate-200
                  p-7
                  shadow-lg
                  shadow-slate-200/70
                  overflow-hidden
                  cursor-pointer
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-br
                    from-green-400/10
                    to-transparent
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10 }}
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
                  <Icon size={28} className="text-[#021330]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#021330] mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;