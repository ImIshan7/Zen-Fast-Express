import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, User } from 'lucide-react';
import TypewriterComponent from 'typewriter-effect';

export default function Contact() {
    const contactInfo = [
        { icon: Phone, text: '+1 (555) 123-4567', label: 'Call us' },
        { icon: Mail, text: 'support@zenfastexpress.com', label: 'Email us' },
        { icon: MapPin, text: '123 Shipping Lane, Los Angeles, CA 90001', label: 'Visit us' },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 font-sans">
            <span className="gradient-text">
              <TypewriterComponent
                  options={{
                      strings: ['Get in Touch', 'Contact Us', 'Reach Out'],
                      autoStart: true,
                      loop: true,
                  }}
              />
            </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Have questions? We're here to help. Contact our team for support.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass-effect p-6 rounded-lg animated-border"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-white/10">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                                            <p className="text-gray-400 font-light">{item.text}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect p-8 rounded-lg"
                    >
                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="contact-input pl-12 font-light"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="contact-input pl-12 font-light"
                                    />
                                </div>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-6 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="contact-input pl-12 resize-none font-light"
                                    ></textarea>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 px-6 bg-white text-black rounded-lg font-semibold
                         hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="h-5 w-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}