import React from 'react';
import { motion } from 'framer-motion';
import { Package, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const footerLinks = {
        services: ['Air Freight', 'Ocean Freight', 'Ground Shipping', 'Express Delivery', 'Warehousing'],
        company: ['About Us', 'Careers', 'News & Media', 'Sustainability'],
        support: ['Track Package', 'Help Center', 'Terms of Service', 'Privacy Policy'],
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Package className="h-8 w-8 text-blue-500" />
                            <span className="text-2xl font-bold text-white">Zen Fast Express</span>
                        </div>
                        <p className="text-gray-400 mb-6 font-light">
                            Your trusted partner in global logistics and express delivery solutions.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 2 }}
                                    className="hover:text-blue-500 transition-colors font-light"
                                >
                                    <a href="#">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 2 }}
                                    className="hover:text-blue-500 transition-colors font-light"
                                >
                                    <a href="#">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-light">
                                <Mail className="h-5 w-5 text-blue-500" />
                                <span>support@zenfastexpress.com</span>
                            </li>
                            <li className="flex items-center gap-3 font-light">
                                <Phone className="h-5 w-5 text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 font-light">
                                <MapPin className="h-5 w-5 text-blue-500" />
                                <span>123 Shipping Lane, Los Angeles, CA 90001</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm font-light">
                            © 2024 Zen Fast Express. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {footerLinks.support.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors font-light"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}