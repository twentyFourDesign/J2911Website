import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Contact from "../components/contact";
import { isMobile } from "../utils";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false);
  const divRef = useRef(null);
  const aboutDivRef = useRef(null);
  const serviceDivRef = useRef(null);
  const isInView = useInView(divRef, { margin: "-100px", once: true });
  const aboutDivInView = useInView(aboutDivRef, { margin: "-100px", once: true });
  const serviceDivInView = useInView(serviceDivRef, { margin: "-100px", once: true });

  useEffect(() => {
    if (isMobile()) {
      setIsMobileView(true);
    }
  }, []);

  return (
    <main>
      <ScrollToTop smooth />
      <Navigation />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2" ref={divRef}>
        <motion.div
          className="rounded order2 resourceDetail"
          style={{
            transform: isMobileView ? "none" : isInView ? "none" : "translateX(-200px)",
            opacity: isMobileView ? 1 : isInView ? 1 : 0,
            transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <div>
            <span style={{ backgroundColor: "#F3F3F1", borderLeft: "8px solid #003DA7", padding: "5px" }} className="">
              Your resourceful partner
            </span>
          </div>
          <h1 className="mt-4 md:max-w-[95%] md:text-5xl text-4xl font-normal">
            Empowering Organizations for a Dynamic Future
          </h1>
          <p className="mt-4 font-sm md:font-lg">
            We envision a future where organizations transcend boundaries and embrace innovation to thrive in an ever-evolving landscape.
          </p>
          <div className="mt-4 flex mb-3 md:mb-0">
            <button className="flex items-center backgroundTheme p-3 rounded-xl border-none text-white">
              Get a Quote
              <FontAwesomeIcon icon={faArrowRight} className="h-[20px] w-[30px]" />
            </button>
            <button className="ml-2 bg-gray-300 p-3 rounded-xl border-none" style={{ minWidth: "30%" }}>
              Learn More
            </button>
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
          <div className="postivieOverlay">
            <div className="flex flex-col items-center justify-center h-[100%] w-[57%]">
              <h1 className="topOverlayHead mt-3 md:mt-0">100%</h1>
              <p className="topOverlayDetails md:mt-2">
                Positive feedbacks from happy clients
              </p>
            </div>
          </div>
          <img
            src="/christopher.jpeg"
            alt="christopher.jpeg"
            className="h-[90%] w-[95%] relativeImg"
          />
          <div className="backgroundTheme projectOverlay">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", width: "57%" }}>
              <h1 className="topOverlayHead text-white">500+</h1>
              <p className="topOverlayDetails mt-2" style={{ color: "#78A9FF" }}>
                Completed projects with satisfied clients
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:pb-20 pb-5 pt-10" ref={aboutDivRef} style={{ backgroundColor: "#FAFAFD" }}>
        <motion.div
          className="rounded p-5 relativeImg"
          style={{
            transform: isMobileView ? "none" : aboutDivInView ? "none" : "translateX(-200px)",
            opacity: isMobileView ? 1 : aboutDivInView ? 1 : 0,
            transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <img src="/about-1.jpeg"
            alt="christopher.jpeg relativeImg"
            className="h-[75%] pl-8 w-[70%]"
            width={1000}
            height={1000}
          />
          <img src="/about-2.jpeg"
            alt="christopher.jpeg"
            className="h-[20%] pl-8 overlayAboutImg"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          className="rounded md:pt-20 pt-3 mb-3 p-3 md:p-0"
          style={{
            transform: isMobileView ? "none" : aboutDivInView ? "none" : "translateX(200px)",
            opacity: isMobileView ? 1 : aboutDivInView ? 1 : 0,
            transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <div className="w-[20px] line"></div>
              <span className="tracking-[3px] uppercase text-[#6A6A77] pl-3">
                About Us
              </span>
            </div>
            <h1 className="md:text-5xl text-3xl font-normal">
              Welcome to J2911 Resources LLC
            </h1>
            <p className="pl-4 mt-3 yellowBorder font-md md:font-lg">
              Welcome to J2911 RESOURCES LLC - Your Trusted and Resourceful Partner in ICT Consulting, Business Development, Policy, and Strategic Partnerships.
            </p>
            <p className="mt-1 md:pt-4 pt-2 font-sm md:font-lg">
              At J2911 RESOURCES LLC, we pride ourselves on being a leading consultancy firm specializing in a comprehensive range of services tailored to meet the dynamic needs of the modern business landscape. With a wealth of experience and a proven track record, we are committed to empowering your organization for sustained growth and success.
            </p>
            <div className="mt-2 pt-3">
              <button className="flex items-center backgroundTheme p-3 rounded-xl border-none text-white">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="h-[20px] w-[30px]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <div
          className="col-lg-12 text-center mt-4"
        >
          <span className="tracking-[1px] uppercase text-[#6A6A77] mt-2">Our Services</span>
          <h1 className="text-3xl md:text-4xl font-normal mt-2">Leverage Our Expertise</h1>
        </div>
        <motion.div 
          className="p5 grid md:grid-cols-2 grid-cols-1 gap-2"
          ref={serviceDivRef}
          style={{
            transform: isMobileView ? "none" : serviceDivInView ? "none" : "translateY(200px)",
            opacity: isMobileView ? 1 : serviceDivInView ? 1 : 0,
            transition: !isMobileView && "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <div className="card px-2 pb-5 shadowcard">
            <div className="card-body ">
              <div className="roundServiceDiv p-3">
                <img src="/monitor.png" alt="Monitor" width={100} height={100} />
              </div>
              <h5 className="card-title text-3xl font-normal mt-3">ICT Consulting</h5>
              <p className="card-text md:mt-3 font-sm">
                Leverage our expertise in Information and Communication Technology
                (ICT) to enhance the efficiency and effectiveness of your
                digital infrastructure. From system integration to
                cybersecurity, we provide solutions that align with your business
                goals.
              </p>
              <div class="flex md:mt-3">
                <button className="flex items-center serviceBorder justify-center bg-[#f6f3f3] font-semibold rounded-full  w-[19%] sm:w-[20%] md:w-[25%] lg:w-[13%] h-[40px]">
                  <img src="/rightarrow.png" alt="Right Arrow" height={100} width={100} className="h-[70%] w-[40%]" />
                </button>
              </div>
            </div>
          </div>
          <div class="rounded p-2 shadowcard">
            <div className="card ps-2 pb-5">
              <div className="card-body ">
                <div className="roundServiceDiv p-3">
                  <img src="/favorite-chart.png" alt="Monitor" width={100} height={100} />
                </div>
                <h5 className="card-title serviceCardHead mt-4">Business Development</h5>
                <p className="card-text pt-2">
                  Our business development services are designed to drive your
                  organization forward. We offer strategic insights, market
                  analysis, and tailored growth strategies to propel your
                  business into new heights.
                </p>
                <div class="flex md:mt-3">
                  <button className="flex items-center serviceBorder justify-center bg-[#f6f3f3] font-semibold rounded-full w-[19%] sm:w-[20%] md:w-[25%] lg:w-[12%] h-[40px]">
                    <img src="/rightarrow.png" alt="Right Arrow" height={100} width={100} className="h-[70%] w-[40%]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded p-2 shadowcard">
            <div className="card ps-2">
              <div className="card-body">
                <div className="roundServiceDiv p-3">
                  <img src="/bill.png" alt="Bill" width={100} height={100} />
                </div>
                <h5 className="card-title serviceCardHead mt-4">Policy Development</h5>
                <p className="card-text pt-2">
                  Navigate the complex landscape of regulations and policies
                  with confidence. Our team of experts will work closely with
                  you to develop and implement policies that ensure compliance,
                  mitigate risks, and create a conducive environment for your
                  operations.
                </p>
                <div class="flex md:mt-3">
                  <button className="flex items-center serviceBorder justify-center bg-[#f6f3f3] font-semibold rounded-full w-[19%] sm:w-[20%] md:w-[25%] lg:w-[12%] h-[40px]">
                    <img src="/rightarrow.png" alt="Right Arrow" height={100} width={100} className="h-[70%] w-[40%]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded p-2 shadowcard">
            <div className="card ps-2">
              <div className="card-body">
                <div className="roundServiceDiv p-3">
                  <img src="/Group.png" alt="Group" width={100} height={100} />
                </div>
                <h5 className="card-title mt-4 serviceCardHead">
                  Strategic Partnerships Development
                </h5>
                <p className="card-text pt-2">
                  Foster valuable connections and collaborations that propel
                  your business forward. We specialize in identifying,
                  negotiating, and cultivating strategic partnerships that
                  enhance your market presence and create mutually beneficial
                  opportunities.
                </p>
                <div class="flex md:mt-3">
                  <button className="flex items-center serviceBorder justify-center bg-[#f6f3f3] font-semibold rounded-full w-[19%] sm:w-[20%] md:w-[25%] lg:w-[12%] h-[40px]">
                    <img src="/rightarrow.png" alt="Right Arrow" height={100} width={100} className="h-[70%] w-[40%]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="backgroundTheme text-white flex flex-col backgroundLingkaran">
        <div className="justify-center text-center mt-8">
          <span className="tracking-[1px] uppercase text-[#6DAAFF] mt-8">Why Choose us</span>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}>
            <p
              className="text-3xl md:text-5xl font-normal w-[70%] md:w-[33%] mt-4"
            >
              The leading Edge in the Industry
            </p>

          </div>
        </div>
        <div className="p-2 grid md:grid-cols-3 grid-cols-1 gap-2 mb-2">
          <div className="rounded p5">
            <div className="flex">
              <div className="roundDiv">
                01
              </div>
              <div className="marginAuto">
                <img src="/Line2.png" className="m-auto" alt="Arrow" height={100} width={100} />
              </div>
            </div>
            <h1 className="cardHead pt-2">Expertise</h1>
            <p className="cardDetail pt-2">
              Our team comprises seasoned professionals with diverse backgrounds in ICT, business development, policy, and strategic partnerships.
            </p>
          </div>
          <div className="rounded p5">
            <div className="flex">
              <div className="roundDiv">
                02
              </div>
              <div className="marginAuto">
                <img src="/Line2.png" className="m-auto" alt="Arrow" height={100} width={100} />
              </div>
            </div>
            <h1 className="cardHead pt-2">Tailored Solutions</h1>
            <p className="cardDetail pt-2">
              We understand that every business is unique. Our solutions are customized to address your specific challenges and opportunities.
            </p>
          </div>
          <div className="rounded p5">
            <div className="flex">
              <div className="roundDiv">
                03
              </div>
              <div className="marginAuto">
                <img src="/Line2.png" className="m-auto" alt="Arrow" height={100} width={100} />
              </div>
            </div>
            <h1 className="cardHead pt-2">Proven Track Record</h1>
            <p className="cardDetail pt-2">
              Over the years, we have successfully guided numerous organizations to achieve their objectives, fostering partnerships, growth and resilience.
            </p>
          </div>
          <div className="rounded p5">
            <div className="flex">
              <div className="roundDiv">
                04
              </div>
              <div className="marginAuto">
                <img src="/Line2.png" className="m-auto" alt="Arrow" height={100} width={100} />
              </div>
            </div>
            <h1 className="cardHead pt-2">Innovation</h1>
            <p className="cardDetail pt-2">
              Embrace the latest trends and technologies with our forward-thinking approach to consulting. Stay ahead of the curve in an ever-evolving business landscape.
            </p>
          </div>
          <div className="rounded p5">
            <div className="roundDiv">
              05
            </div>
            <h1 className="cardHead pt-2">Client-Centric Approach</h1>
            <p className="cardDetail pt-2">
              Your success is our priority. We work collaboratively, ensuring open communication and a deep understanding of your business objectives.
            </p>
          </div>
          <div className="rounded p5 mt-6">
            <h1 className="cardHead">Let’s guide you every step of the way!</h1>
            <p className="cardDetail">
              <button className="quoteBtn mt-2">
                Get a Quote
              </button>
            </p>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </main>
  );
}
