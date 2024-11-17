import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Clock, ArrowRight } from 'lucide-react';
import TypewriterComponent from 'typewriter-effect';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white py-32">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
            <span className="gradient-text">
              <TypewriterComponent
                  options={{
                      strings: ['Fast', 'Reliable', 'Secure'],
                      autoStart: true,
                      loop: true,
                  }}
              />
            </span>
                        <br />
                        Delivery Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
                        Your trusted partner in global logistics and express delivery
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            href="#track"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                        >
                            Track Package <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                        >
                            Contact Us
                        </motion.a>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {[
                        { icon: Truck, title: 'Global Shipping', desc: 'Worldwide delivery to over 200 countries' },
                        { icon: Package, title: 'Package Protection', desc: 'Full insurance coverage on all shipments' },
                        { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock customer assistance' },
                    ].map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center card-hover"
                            >
                                <Icon className="h-12 w-12 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-blue-100">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}