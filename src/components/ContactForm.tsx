import { motion } from "framer-motion";
import type { FormEvent } from "react";
import {
    Phone,
    Mail,
    Globe,
    MapPin,
    Send,
} from "lucide-react";
import { useState } from "react";

type ContactInfoType = {
    icon: React.ReactNode,
    title: string,
    value: string,
}[]

const contactInfo: ContactInfoType = [
    {
        icon: <Phone size={20} />,
        title: "Phone",
        value: "+92 304 1539733",
    },
    {
        icon: <Mail size={20} />,
        title: "Email",
        value: "info@webglock.com",
    },
    {
        icon: <Globe size={20} />,
        title: "Website",
        value: "www.webglock.com",
    },
    {
        icon: <MapPin size={20} />,
        title: "Based In",
        value: "Pakistan — serving globally",
    },
];


const Contact = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const formHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name,email,phone,service,desc)
        setName("")
        setEmail("")
        setPhone("")
        setService("")
        setDesc("")
    }
    

    return (
        <section
            id="contact"
            className="relative overflow-hidden py-24 bg-[#021330]"
        >
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-500/10 blur-[180px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-4">
                        Contact Us
                    </p>

                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Let's Build Something
                        <span className="block bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                            Amazing Together
                        </span>
                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
                        Tell us about your project and we'll create a
                        growth-focused strategy tailored to your goals.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >

                        {contactInfo.map((item) => (
                            <div
                                key={item.title}
                                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  hover:border-green-400/30
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
                            >
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                      h-12
                      w-12
                      rounded-xl
                      bg-green-400
                      text-[#021330]
                      flex
                      items-center
                      justify-center
                    "
                                    >
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="text-slate-500 text-xs uppercase tracking-[2px]">
                                            {item.title}
                                        </p>

                                        <h3 className="text-white font-semibold mt-1">
                                            {item.value}
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        ))}

                        {/* Working Hours */}
                        <div
                            className="
                bg-gradient-to-r
                from-[#081d3b]
                to-[#05162d]
                border
                border-white/10
                rounded-2xl
                p-6
                mt-8
              "
                        >
                            <p className="text-green-400 font-semibold uppercase tracking-[2px] text-sm">
                                Working Hours
                            </p>

                            <h3 className="text-white font-semibold mt-3">
                                Mon – Sat · 10:00 AM – 8:00 PM (PKT)
                            </h3>

                            <p className="text-slate-400 text-sm mt-2">
                                Need something urgent? WhatsApp us and we'll
                                get back quickly.
                            </p>
                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
              lg:p-10
            "
            
                    >

                        <h3 className="text-white text-3xl font-bold">
                            Start a Project
                        </h3>

                        <p className="text-slate-400 mt-2 mb-8">
                            Fill out the form and we'll get in touch.
                        </p>

                        <form className="space-y-5" onSubmit={(e)=>formHandler(e)}>

                            <div className="grid md:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-green-400
                  "
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-green-400
                  "
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-green-400
                  "
                                />

                                <select
                                    className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    focus:outline-none
                    focus:border-green-400
                  "
                                    onChange={(e) => setService(e.target.value)}
                                    value={service}
                                >
                                    <option disabled className="bg-[#021330]">
                                        Choose service
                                    </option>
                                    <option className="bg-[#021330]">
                                        Website Development
                                    </option>

                                    <option className="bg-[#021330]">
                                        Shopify Development
                                    </option>

                                    <option className="bg-[#021330]">
                                        SEO Services
                                    </option>

                                    <option className="bg-[#021330]">
                                        Google Ads
                                    </option>

                                    <option className="bg-[#021330]">
                                        Mobile App Development
                                    </option>
                                </select>

                            </div>

                            <textarea
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                                rows={6}
                                placeholder="Tell us about your project..."
                                className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-500
                  resize-none
                  focus:outline-none
                  focus:border-green-400
                "
                            />

                            <button
                                type="submit"
                                className="
                  glow-btn
                  bg-green-400
                  text-[#021330]
                  font-semibold
                  px-8
                  py-4
                  rounded-full
                  flex
                  items-center
                  gap-2
                  hover:scale-105
                  transition-all
                  duration-300
                "
                            >
                                Send Message
                                <Send size={18} />
                            </button>

                            <p className="text-slate-500 text-sm">
                                Usually replies within 24 hours.
                            </p>

                        </form>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;