import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, Package, Shield, Clock } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Plane,
            title: 'Air Freight',
            description: 'Express worldwide air delivery services for time-sensitive shipments',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            icon: Ship,
            title: 'Ocean Freight',
            description: 'Cost-effective sea shipping solutions for larger cargo',
            image: 'https://images.unsplash.com/photo-1577032229840-33197764440d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            icon: Truck,
            title: 'Ground Shipping',
            description: 'Reliable domestic and cross-border ground transportation',
            image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            icon: Package,
            title: 'Warehousing',
            description: 'Secure storage and inventory management solutions',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            icon: Shield,
            title: 'Cargo Insurance',
            description: 'Comprehensive coverage for your valuable shipments',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            icon: Clock,
            title: 'Express Delivery',
            description: 'Same-day and next-day delivery options',
            image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Services</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We offer comprehensive logistics solutions tailored to your needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-lg card-hover"
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                                </div>
                                <div className="relative p-8 h-full flex flex-col justify-end">
                                    <Icon className="h-12 w-12 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-200">{service.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}