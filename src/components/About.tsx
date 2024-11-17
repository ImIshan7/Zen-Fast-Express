import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

export default function About() {
    const stats = [
        { icon: Users, value: '50K+', label: 'Happy Customers' },
        { icon: Clock, value: '24/7', label: 'Support' },
        { icon: Award, value: '99.9%', label: 'Delivery Success' },
        { icon: TrendingUp, value: '15+', label: 'Years Experience' },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 font-sans">Zen Fast Express</h2>
                        <p className="text-gray-600 mb-6 font-light">
                            Since 2009, Zen Fast Express has been revolutionizing the logistics industry with our
                            innovative approach to shipping and delivery. We combine cutting-edge technology with
                            exceptional customer service to provide seamless delivery experiences worldwide.
                        </p>
                        <p className="text-gray-600 mb-8 font-light">
                            Our global network spans across 200+ countries, supported by state-of-the-art tracking
                            systems and a dedicated team of logistics experts. We're committed to sustainability,
                            using eco-friendly practices and optimizing routes to reduce our carbon footprint.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="text-center p-6 bg-blue-50 rounded-lg"
                                    >
                                        <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                                        <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                                        <div className="text-gray-600 font-light">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Logistics Center"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute inset-0 bg-blue-600 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}