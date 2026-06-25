import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { number: "120+", label: "Projects Launched" },
  { number: "70+", label: "Happy Clients" },
  { number: "10+", label: "Industries Served" },
  { number: "5+", label: "Years Experience" },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-24 lg:py-32">

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase text-green-500 font-bold text-md">
              About Webglock
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-5xl font-bold text-[#021330] leading-tight">
              A small team obsessed with
              shipping growth, not just
              websites.
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              We're a Pakistan-based studio of developers, designers and
              marketers helping ambitious businesses launch and scale online.
              From your first landing page to multi-channel ad campaigns — we
              own the whole digital stack so you can focus on running your
              company.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "End-to-end: design, dev, hosting, marketing.",
                "Transparent reporting and clear pricing.",
                "Fast turnaround without cutting corners.",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="text-green-500 shrink-0"
                  />
                  <span className="text-[#021330] text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-xl
                  shadow-slate-200/70
                  border
                  border-slate-100
                  cursor-pointer
                "
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.h3>

                <p className="mt-3 text-slate-500 text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;