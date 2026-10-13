import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import SwipeToast from "./SwipeToast";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                },

                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );


            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Message could not be sent. Please try again.");
        }
    };

    const inputStyle =
        "w-full rounded-xl border border-[#222d43] bg-[#111a2d]/80 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-[#929bad] focus:border-[#7664ff] focus:ring-1 focus:ring-[#7664ff]/30";

    return (
        <section
            id="contact"
            className="w-full bg-[#080a0f] px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
        >
            <div className="relative mx-auto w-full max-w-[1216px] overflow-hidden rounded-[24px] border border-[#263044] bg-[#0d1321] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

                {/* Bottom-right glow */}
                <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-96 rounded-full bg-purple-600/10 blur-[100px]" />

                <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col">
                        <div>
                            <span className="inline-flex items-center rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-bold tracking-wide text-emerald-400">
                                LET'S TALK
                            </span>

                            <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl">
                                Have a project in mind?
                                <br />
                                Let's connect!
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-[#9ba8bd]">
                                Send a quick message and I will get back to you
                                within 24 hours.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="mt-6 flex flex-col gap-4">

                            {/* Email */}
                            <a
                                href="mailto:hasinanumjahin1@gmail.com"
                                className="group flex items-center gap-4"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#24245b]/70 text-[#8585ff] transition duration-300 group-hover:bg-[#34347c]">
                                    <Mail size={17} fill="currentColor" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs text-[#9ba8bd]">
                                        Email Direct
                                    </p>

                                    <p className="mt-1 break-all text-sm font-bold text-white transition group-hover:text-[#a5a0ff]">
                                        adasr0099@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="https://wa.me/8801708561481"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#321d50] text-[#c084fc] transition duration-300 group-hover:bg-[#4a2872]">
                                    <Phone size={17} fill="currentColor" />
                                </div>

                                <div>
                                    <p className="text-xs text-[#9ba8bd]">
                                        Phone / WhatsApp
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-white transition group-hover:text-[#d8b4fe]">
                                        +8801708561481
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1.5 block text-xs font-semibold text-[#c6ceda]"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                    {...register("name", {
                                        required: "Your name is required",
                                    })}
                                    className={inputStyle}
                                />

                                {errors.name && (
                                    <p className="mt-1.5 text-xs text-red-400">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1.5 block text-xs font-semibold text-[#c6ceda]"
                                >
                                    Your Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="yourmail@gmail.com"
                                    {...register("email", {
                                        required: "Your email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                    className={inputStyle}
                                />

                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-400">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                        </div>

                        {/* Subject */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="mb-1.5 block text-xs font-semibold text-[#c6ceda]"
                            >
                                Subject
                            </label>

                            <input
                                id="subject"
                                type="text"
                                placeholder="Project Discussion"
                                {...register("subject", {
                                    required: "Subject is required",
                                })}
                                className={`${inputStyle} focus:!border-[#7664ff]`}
                            />

                            {errors.subject && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.subject.message}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-1.5 block text-xs font-semibold text-[#c6ceda]"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Tell me about your project scope, budget, timeline..."
                                {...register("message", {
                                    required: "Please enter your message",
                                    minLength: {
                                        value: 10,
                                        message: "Message must be at least 10 characters",
                                    },
                                })}
                                className={`${inputStyle} min-h-[86px] resize-y`}
                            />

                            {errors.message && (
                                <p className="mt-1.5 text-xs text-red-400">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button

                            type="submit"
                            disabled={isSubmitting}
                            className="mt-1 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#5145e8] to-[#922de8] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>


                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
