import {motion} from "framer-motion"

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#0d4b3b_0%,#04152d_35%,#021330_70%)] py-32">

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[4px] text-green-400 font-semibold"
        >
          contact
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-4xl md:text-6xl font-bold text-white"
        >
          Let's build something{" "}
          <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
            great
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed"
        >
            tell us about you project, timeline and budget __ we'll reply in one buisness day
        </motion.p>

      </div>
    </section>
  )
}

export default ContactHero