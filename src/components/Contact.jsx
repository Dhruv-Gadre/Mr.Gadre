import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, MessageSquare } from "lucide-react";


export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result);
                setSubmitStatus({ success: true, message: "Message sent successfully!" });
                form.current.reset();
            }, (error) => {
                console.log(error);
                setSubmitStatus({ success: false, message: "Failed to send message. Please try again." });
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="min-h-screen py-32 px-8 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to connect? I'd love to hear from you.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 shadow-xl">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            {/* Name Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-3 text-gray-500">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-3 text-gray-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <div className="absolute left-3 top-3 text-gray-500">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white placeholder-gray-400 transition-all"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                            >
                                <Send className="w-5 h-5" />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {/* Status Message */}
                            {submitStatus && (
                                <div className={`mt-4 p-3 rounded-lg text-center ${submitStatus.success ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Other Ways to Connect</h3>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Email Me</h4>
                                    <a href="mailto:dhruvgadre09062005@gmail.com" className="text-cyan-400 hover:underline">dhruvgadre09062005@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cyan-400">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Call Me</h4>
                                    <a href="tel:+91 9136531815" className="text-cyan-400 hover:underline">+91 91365 31815</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="bg-cyan-500/10 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cyan-400">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Location</h4>
                                    <p className="text-cyan-400">Chennai, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}