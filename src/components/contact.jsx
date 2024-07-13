import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "../utils";

const Contact = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const divRef = useRef(null);
    const isInView = useInView(divRef, { margin: "-100px", once: true });

    useEffect(() => {
        if (isMobile()) {
            setIsMobileView(true);
        }
    }, []);

    return (
        <div className="lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-2 backgroundLingkaranContact" ref={divRef}>
            <motion.div
                className="rounded p-4 md:p-5 lg:mt-14 md:mt-10"
                style={{
                    transform: isMobileView ? "none" : isInView ? "none" : "translateX(-200px)",
                    opacity: isMobileView ? 1 : isInView ? 1 : 0,
                    transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <p className="tracking-[1px] uppercase text-[#6A6A77]">CONTACT US</p>
                <h1 className="lg:max-w-[85%] text-4xl font-normal">
                    Let’s Shape the Future Together!
                </h1>
                <p className="leverageSubHead mt-4">
                    Whether you're aiming to optimize your ICT infrastructure, drive business growth, navigate regulatory landscapes, or form strategic partnerships, J2911 RESOURCES LLC is here to guide you every step of the way. Let's embark on a journey of innovation, growth, and success.
                    Contact us today to explore how we can elevate your organization to new heights.
                </p>
            </motion.div>
            <motion.div
                className="rounded md:p-5"
                style={{
                    transform: isMobileView ? "none" : isInView ? "none" : "translateX(200px)",
                    opacity: isMobileView ? 1 : isInView ? 1 : 0,
                    transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <form className="lg:max-w-sm mx-auto sm:max-w-xl max-w-sm contactForm">
                    <div className="mb-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-2">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-2">
                        <label for="interested" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What service are you interested in</label>
                        <select id="interested" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option>Select project type</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required rows={5} />
                    </div>
                    <button type="submit" className="mt-2 mb-4 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
                </form>

            </motion.div>
        </div>
    )
}

export default Contact;
