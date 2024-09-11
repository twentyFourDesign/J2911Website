import Contact from "../components/contact";
import Footer from "../components/footer";
import Navigation from "../components/navbar";

const Services = () => {
    return (
        <>
            <Navigation />

            <div className="col-lg-12 text-center mt-4">
                <span className="tracking-[1px] uppercase text-[#6A6A77] mt-2">Our Services</span>
                <h1 className="text-3xl md:text-4xl font-normal">Leverage Our Expertise</h1>
            </div>

            <div className="container d-flex justify-content-center margant">
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
                    </div>
                </div>
            </div>

            <div className=" d-flex  justify-content-center mt-3 ">
                <img
                    src="/Line.png"
                    alt="Arrow"
                />
            </div>

            <div className="md:p-20 p-4 grid grid-cols-1 lg:grid-cols-2 gap-2 md:mt-8">
                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                01
                            </div>
                            <span className="fs-4 flex items-center pl-3">Software Development</span>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Custom Application Development:</span>
                            <p className="text-md serviceDetail">
                                Tailor-made software solutions to address specific business
                                needs and challenges, ensuring seamless integration with
                                your existing systems.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Mobile App Development: </span>
                            <p className="text-md serviceDetail">
                                Creation of robust and user-friendly mobile applications for
                                both iOS and Android platforms, enhancing your digital
                                presence and accessibility.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Web Development: </span>
                            <p className="text-md serviceDetail">
                                Development of dynamic and responsive websites and web
                                applications that provide an excellent user experience
                                and drive business growth
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                02
                            </div>
                            <span className="fs-4 flex items-center pl-3">Project Management</span>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">IT Project Management:</span>
                            <p className="text-md serviceDetail">
                                Expert management of IT projects from initiation to completion,
                                ensuring they are delivered on time, within scope, and within budget.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Agile and Scrum Methodologies:</span>
                            <p className="text-md serviceDetail">
                                Implementation of Agile and Scrum frameworks to enhance project
                                flexibility, responsiveness, and efficiency.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Risk Management:</span>
                            <p className="text-md serviceDetail">
                                Identification, assessment, and mitigation of risks associated
                                with IT projects to ensure successful outcomes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                03
                            </div>
                            <span className="fs-4 flex items-center pl-3">Software Architecture</span>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Architectural Design:</span>
                            <p className="text-md serviceDetail">
                                Creation of scalable and efficient software architectures that support your business processes and future growth.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">System Architecture Review:</span>
                            <p className="text-md serviceDetail">
                                Evaluation and optimization of existing system architectures to improve performance, reliability, and scalability.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Microservices Architecture:</span>
                            <p className="text-md serviceDetail">
                                Development and implementation of microservices architectures to enable modular, flexible, and resilient software systems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                04
                            </div>
                            <span className="fs-4 pt-2 flex items-center pl-3">Software Systems</span>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Enterprise Resource Planning (ERP) Systems:</span>
                            <p className="text-md serviceDetail">
                                Implementation and customization of ERP systems to streamline business processes and improve operational efficiency.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Customer Relationship Management (CRM) Systems:</span>
                            <p className="text-md serviceDetail">
                                Deployment of CRM systems to enhance customer engagement, retention, and satisfaction.
                            </p>
                        </div>

                        <div className="mt-4">
                            <span className="serviceHead">Database Management Systems (DBMS):</span>
                            <p className="text-md serviceDetail">
                                Design, implementation, and maintenance of robust database management systems to ensure data integrity, security, and accessibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eductaion Services */}
            <div className="container d-flex justify-content-center margant">
                <div className="card px-2 pb-5 shadowcard">
                    <div className="card-body ">
                        <div className="roundServiceDiv p-3">
                            <img src="/monitor.png" alt="Monitor" width={100} height={100} />
                        </div>
                        <h5 className="card-title text-3xl font-normal mt-3">EDUCATION CONSULTING</h5>
                        <p className="card-text md:mt-3 font-sm">
                            J2911 Resources LLC operates as a consultancy, providing tailored solutions to educational institutions, non-profit organizations, and government agencies. We address the evolving needs of the education sector by offering expertise.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" d-flex  justify-content-center mt-3 ">
                <img
                    src="/Line.png"
                    alt="Arrow"
                />
            </div>

            <div className="md:p-20 p-4 grid grid-cols-1 lg:grid-cols-3 gap-2 md:mt-8">
                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                01
                            </div>
                            <span className="text-xl flex items-center pl-3">Training and Capacity Building</span>
                        </div>

                        <div className="mt-4">
                            <span className=" text-md">We design and deliver professional development programs to enhance educators' skills and knowledge.</span>
                            {/* <p className="text-md serviceDetail">
                                Tailor-made software solutions to address specific business
                                needs and challenges, ensuring seamless integration with
                                your existing systems.
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                02
                            </div>
                            <span className="text-xl flex items-center pl-3">Collaboration and Government Partnerships</span>
                        </div>

                        <div className="mt-4">
                            <span className=" text-md">We bridge the gap between institutions and government agencies, facilitating collaboration and securing resources.</span>
                            {/* <p className="text-md serviceDetail">
                                Expert management of IT projects from initiation to completion,
                                ensuring they are delivered on time, within scope, and within budget.
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="rounded container">
                    <div className="col-lg-12">
                        <div className="d-flex numbericoncolor">
                            <div className="roundServiceDiv">
                                03
                            </div>
                            <span className="text-xl flex items-center pl-3">EdTech Services </span>
                        </div>

                        <div className="mt-4">
                            <span className="text-md">We provide guidance on integrating technology into educational settings, ensuring effective implementation and maximizing student learning outcomes.</span>
                            {/* <p className="text-md serviceDetail">
                                Creation of scalable and efficient software architectures that support your business processes and future growth.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid md:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">

                <div className="rounded p-2 shadowcard">
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
                        </div>
                    </div>
                </div>

                <div className="rounded p-2 shadowcard">
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
                        </div>
                    </div>
                </div>

                <div className="rounded p-2 shadowcard">
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
                        </div>
                    </div>
                </div>

                <div className="rounded p-2 shadowcard">
                    <div className="card ps-2">
                        <div className="card-body">
                            <div className="roundServiceDiv p-3">
                                <img src="/Group.png" alt="Group" width={100} height={100} />
                            </div>
                            <h5 className="card-title mt-4 serviceCardHead">
                                Educational Technology Implementation
                            </h5>
                            <p className="card-text pt-2">
                                Foster valuable connections and collaborations that propel
                                your business forward. We specialize in identifying,
                                negotiating, and cultivating strategic partnerships that
                                enhance your market presence and create mutually beneficial
                                opportunities.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Contact />
            <Footer />
        </>
    )
};

export default Services;
