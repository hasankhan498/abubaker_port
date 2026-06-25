import { NavLink } from 'react-router-dom';
import HeroImage from '../assets/imageHero-removebg-preview.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,#0d4b3b_0%,#04152d_35%,#021330_70%)]">

            <div className="absolute top-0 right-0 w-175 h-175 bg-green-500/15 rounded-full blur-[180px] animate-pulse pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-500/15 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-screen mx-auto px-10 lg:px-20 py-16 lg:py-24">
                <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 items-center pt-10">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 mb-8 hover:bg-slate-800 transition">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                            <span className="text-sm text-gray-300 font-medium">
                                Your Digital Growth Partner
                            </span>
                        </div>


                        {/* Heading */}
                        <h1 className="font-bold text-white leading-tight">
                            <span className="block text-4xl md:text-5xl xl:text-6xl">
                                We Build Your
                            </span>

                            <span className="block text-4xl md:text-5xl xl:text-6xl bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                                Digital Presence
                            </span>

                            <span className="block text-4xl md:text-5xl xl:text-6xl">
                                & Grow Your
                            </span>

                            <span className="block text-4xl md:text-5xl xl:text-6xl">
                                Business
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Professional website development and digital marketing
                            solutions designed to help you reach more customers,
                            generate more leads, and increase sales.
                        </p>


                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <NavLink
                            to={'/contact'}
                            className="glow-btn inline-block bg-green-400 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                Start a Project →
                            </NavLink>
                            <NavLink
                            to={'/portfolio'}
                             className="border border-slate-600 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition cursor-pointer">
                                See Our Work
                            </NavLink>

                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-14 max-w-md mx-auto lg:mx-0">
                            <div>
                                <h3 className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent font-bold text-4xl">
                                    120+
                                </h3>
                                <p className="text-gray-400 uppercase text-sm mt-1">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent font-bold text-4xl">
                                    5★
                                </h3>
                                <p className="text-gray-400 uppercase text-sm mt-1">
                                    Avg. Rating
                                </p>
                            </div>

                            <div>
                                <h3 className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent font-bold text-4xl">
                                    24/7
                                </h3>
                                <p className="text-gray-400 uppercase text-sm mt-1">
                                    Support
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    {/* <div className="flex justify-center lg:justify-end lg:scale-110"> */}

                    <div className="flex justify-center lg:justify-end lg:-mr-12">                        <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-full max-w-[700px] object-contain animate-float drop-shadow-[0_0_60px_rgba(74,222,128,0.15)]"
                    />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;