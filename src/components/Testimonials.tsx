import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'E-commerce Owner',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            content: 'Zen Fast Express has transformed our logistics operations. Their reliable service and real-time tracking have significantly improved our customer satisfaction.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Import/Export Manager',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            content: 'Outstanding global shipping solutions! The team goes above and beyond to ensure timely deliveries and excellent communication throughout the process.',
            rating: 5
        },
        {
            name: 'Emma Davis',
            role: 'Retail Director',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            content: "Their express delivery service is unmatched. We've seen a significant improvement in our customer satisfaction scores since partnering with them.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-white font-sans">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Don't just take our word for it. Here's what our valued customers have to say about our services.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                            <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                                <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />
                                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm font-light">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}