import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "../utils";
import { Controller, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import Loader from "./Loader";

const Contact = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const divRef = useRef(null);
    const isInView = useInView(divRef, { margin: "-100px", once: true });
    const form = useRef();

    useEffect(() => {
        if (isMobile()) {
            setIsMobileView(true);
        }
    }, []);

    const { register, handleSubmit, formState: { errors, isSubmitting }, control, reset } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = async (data) => {
        try {
            await emailjs
                .sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                });
            toast.success('Details sent successfully');
            reset();
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
            reset();
        }
    };

    return (
        <div className="lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-2 backgroundLingkaranContact" ref={divRef}>
            <motion.div
                className="rounded p-4 md:p-5 lg:mt-4 md:mt-10"
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
                    <span className="text-lg font-bold">
                        Ready to take your business to the next level? <br />
                    </span>

                    Contact J2911 Resources LLC today and let us be your resourceful partner in achieving success. <br />

                    Schedule a free consultation to discuss your specific needs.
                    Visit our website to learn more about our services.
                    Browse our case studies to see how we have helped other businesses succeed.
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
                <form ref={form} className="lg:max-w-sm mx-auto sm:max-w-xl max-w-sm contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <Controller
                            control={control}
                            name="name"
                            rules={{
                                required: { value: true, message: "Name is required" },
                            }}
                            render={({ field: { ref, ...field } }) => (
                                <input
                                    {...field}
                                    inputExtraProps={{
                                        ref,
                                        required: true,
                                        autoFocus: true
                                    }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            )}
                        />
                        {
                            errors?.name && <span className="error">{errors?.name?.message}</span>
                        }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="text"
                            {...register(
                                "email",
                                {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                    required: "Email is required"
                                }
                            )}
                            id="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors?.email && (
                            <span className="error">{errors?.email?.message}</span>
                        )}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="projectType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What service are you interested in</label>
                        <select
                            {...register(
                                "projectType",
                                {
                                    required: 'Project Type is required'
                                }
                            )}
                            id="projectType"
                            name="projectType"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="Project Type">Select project type</option>
                        </select>
                        {
                            errors?.projectType && <span className="error">{errors?.projectType?.message}</span>
                        }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea
                            {...register(
                                "message",
                                {
                                    required: 'Message is required'
                                })
                            }
                            id="message"
                            name="message"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            rows={5}
                        />
                        {errors?.message && (
                            <span className="error">{errors?.message?.message}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`mt-2 mb-4 md:mb-0 text-white ${isSubmitting ? 'bg-blue-500' : 'bg-blue-700'} hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        {
                            isSubmitting ? <div className="flex justify-center"> <Loader /> </div> : 'Send Message'
                        }
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact;
