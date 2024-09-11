import { faArrowRight, faLocation, faLocationArrow, faMailBulk, faMailForward, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="backgroundTheme text-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-4 gap-8 px-4 py-6 lg:py-8 md:grid-cols-8">
                    <div className="col-span-4 md:col-span-2 md:w-[100%]">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                            <img src="/J2911white.png" className="h-28" alt="Logo" />
                        </h2>
                        <p className="w-max[50%]">
                            When do they work well, and when do
                            they on us and finally, when do we actually
                            need how can we avoid them.
                        </p>
                        <div>
                            <input type="text" id="name" placeholder="name@email.com" className="footerInput text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            <button className="flex items-center quoteBtn p-3 rounded-xl border-none text-black mt-3">
                                Subscribe
                                <FontAwesomeIcon icon={faArrowRight} className="h-[20px] w-[30px]" />
                            </button>
                        </div>

                    </div>
                    <hr className="verticalLine hidden md:block mt-12" />
                    <div className="md:mt-12 col-span-2 md:col-span-1">
                        <h2 className="mb-6 text-sm font-semibold text-white">Quick Links</h2>
                        <ul className="text-color-500 font-medium">
                            <li className="mb-3">
                                <Link to="/" className="hover:underline link text-white">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/about" className="hover:underline link text-white">About Us</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/services" className="hover:underline link text-white">Our Services</Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/contact" className="hover:underline link text-white">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:mt-12 col-span-2 md:col-span-1">
                        <h2 className="mb-6 text-sm font-semibold text-white">Utility pages</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Instructions</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Style guide</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Licenses</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">404 Not found</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Password protected</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:mt-12 col-span-2 md:col-span-1">
                        <h2 className="mb-6 text-sm font-semibold text-white">Resources</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Support</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Privacy policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Terms & Conditions</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Strategic finance</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline link text-white">Video guide</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:mt-12 col-span-2 md:col-span-2">
                        <h2 className="mb-6 text-sm font-semibold text-white">Get in Touch</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <span className="link text-white">
                                    <FontAwesomeIcon icon={faLocationArrow} className="h-[20px] w-[30px]" />
                                    Address:
                                </span>
                                <br />
                                <span>1A, ROAD 3,
                                    IKOTA VILLA ESTATE,
                                    LEKKI, LAGOS.
                                </span>
                            </li>
                            <li className="mb-4">
                                <span className="link text-white">
                                    <FontAwesomeIcon icon={faPhone} className="h-[20px] w-[30px]" />
                                    Phone:
                                </span>
                                <br />
                                <span>
                                    (+234)7044544455
                                </span>
                            </li>
                            <li className="mb-4">
                                <span className="link text-white">
                                    <FontAwesomeIcon icon={faMessage} className="h-[20px] w-[30px]" />
                                    Email:
                                </span>
                                <br />
                                <span>
                                    info@j2911.com.ng
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="footerLine w-[95%]"></div>
                </div>
                <div className="px-4 py-6 backgroundTheme md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center">Copyright © 2024 J9211 Resources. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-7 rtl:space-x-reverse">
                        <a href="#" className="text-white dark:hover:text-white">
                            <img src="/fb.png" alt="Facebook" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <img src="/twitter.png" height={20} width={20} alt="Twitter" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <img src="/Linkedin.png" height={20} width={20} alt="Linkedin" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <img src="/Insta.png" height={20} width={20} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;