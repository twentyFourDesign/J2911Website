import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { isMobile } from "../utils";
import Navigation from "../components/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";

const About = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const divRef = useRef(null);
    const visionDivRef = useRef(null);
    const missionDivRef = useRef(null);
    const isInView = useInView(divRef, { margin: "-100px", once: true });
    const visionDivInView = useInView(visionDivRef, { margin: "-100px", once: true });
    const missionDivInView = useInView(missionDivRef, { margin: "-100px", once: true });

    useEffect(() => {
        if (isMobile()) {
            setIsMobileView(true);
        }
    }, []);

    return (
        <>
            <Navigation />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:mb-12" ref={divRef}>
                <motion.div
                    className="rounded pt-4 px-4 md:p-20 order2"
                    style={{
                        transform: isMobileView ? "none" : isInView ? "none" : "translateX(-200px)",
                        opacity: isMobileView ? 1 : isInView ? 1 : 0,
                        transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <div className="flex flex-col md:pl-12 md:pt-8">
                        <h1 className="text-3xl font-normal md:text-5xl">
                            Welcome to J2911 Resources LLC
                        </h1>
                        <p className="md:mt-3 font-sm">
                            Welcome to J2911 RESOURCES LLC - Your Trusted and Resourceful Partner in ICT Consulting, Business Development, Policy, and Strategic Partnerships At J2911 RESOURCES LLC, we pride ourselves on being a leading consultancy firm specializing in a comprehensive range of services tailored to meet the dynamic needs of the modern business landscape. With a wealth of experience and a proven track record, we are committed to empowering your organization for sustained growth and success.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded p-5 relativeImg order1"
                    style={{
                        transform: isMobileView ? "none" : isInView ? "none" : "translateX(200px)",
                        opacity: isMobileView ? 1 : isInView ? 1 : 0,
                        transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <img
                        src="/pexels-markus-winkler.jpg"
                        alt="christopher relativeImg"
                        className="h-[95%] pl-8 w-[70%]"
                        width={1000}
                        height={1000}
                    />
                    <img
                        src="/pexels-jakubzerdzicki.jpg"
                        alt="christopher"
                        className="h-[20%] pl-8 overlayAboutImg"
                        width={100}
                        height={100}
                    />
                </motion.div>
            </div>

            <div className="md:p-20 grid grid-cols-1 md:grid-cols-2 gap-2" ref={visionDivRef}>
                <motion.div
                    className="rounded px-4 pt5 pt0"
                    style={{
                        transform: isMobileView ? "none" : visionDivInView ? "none" : "translateX(-200px)",
                        opacity: isMobileView ? 1 : visionDivInView ? 1 : 0,
                        transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <img src="/pexels-fauxels.jpg"
                        alt="christopher.jpeg"
                        className="h-[100%] w-[100%]"
                    />
                </motion.div>
                <motion.div
                    className="rounded px-4 md:p-4"
                    style={{
                        transform: isMobileView ? "none" : visionDivInView ? "none" : "translateX(200px)",
                        opacity: isMobileView ? 1 : visionDivInView ? 1 : 0,
                        transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <div className="flex flex-col">
                        <span className="tracking-[1px] uppercase text-[#6A6A77] mt-2">OUR VISION</span>
                        <h1 className="text-3xl font-normal md:text-5xl mt-3">
                            Empowering Organizations for a Dynamic Future
                        </h1>
                        <p className="md:mt-3 font-sm">
                            At J2911 RESOURCES LLC, we envision a future where organizations transcend boundaries and embrace innovation to thrive in an ever-evolving landscape. Our vision is to be the catalyst that empowers businesses to navigate challenges, leverage technology, foster strategic collaborations, and achieve sustained success.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2" ref={missionDivRef}>
                <motion.div
                    className="rounded md:p-20 order2 px-4"
                    style={{
                        transform: isMobileView ? "none" : missionDivInView ? "none" : "translateX(-200px)",
                        opacity: isMobileView ? 1 : missionDivInView ? 1 : 0,
                        transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <div className="flex flex-col md:pl-12">
                        <span className="tracking-[1px] uppercase text-[#6A6A77] mt-2">OUR MISSION</span>
                        <h1 className="text-3xl font-normal md:text-5xl mt-3">
                            Guiding Excellence, Driving Innovation
                        </h1>
                        <p className="md:mt-3 font-sm">
                            Our mission at J2911 RESOURCES LLC is to guide organizations towards excellence by providing tailored solutions in ICT consulting, business development, policy, and strategic partnerships. We are committed to driving innovation, cultivating lasting relationships, and ensuring our clients are well-equipped to adapt, grow, and lead in their respective industries. Through a client-centric approach, expertise, and a passion for transformative change, we strive to be the trusted partner that propels businesses to new heights of success.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded md:p-5 order1 px-4 pt-5"
                    style={{
                        transform: isMobileView ? "none" : missionDivInView ? "none" : "translateX(200px)",
                        opacity: isMobileView ? 1 : missionDivInView ? 1 : 0,
                        transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <img
                        src="/pexels-divinetechygirl.jpg"
                        alt="christopher.jpeg"
                        className="h-[100%] md:pl-8 w-[100%]"
                        width={1000}
                        height={1000}
                    />
                </motion.div>
            </div>

            <Contact />
            <Footer />
        </>
    )
};

export default About;
