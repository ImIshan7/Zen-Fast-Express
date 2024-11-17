import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            question: 'How can I track my package?',
            answer: 'You can easily track your package by entering your tracking number in our tracking tool. We provide real-time updates on your shipment\'s location and status.',
        },
        {
            question: 'What shipping options are available?',
            answer: 'We offer various shipping options including Express Delivery, Standard Shipping, and Economy. Each option comes with different delivery timeframes and pricing.',
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we provide international shipping services to over 200 countries worldwide, with competitive rates and reliable delivery times.',
        },
        {
            question: 'How do I get a shipping quote?',
            answer: 'You can get an instant shipping quote by using our online calculator. Simply enter your package details and destination for accurate pricing.',
        },
        {
            question: 'What is your delivery time guarantee?',
            answer: 'Delivery times vary by service level and destination. Express shipments typically arrive within 1-3 business days, while standard shipping takes 3-7 business days.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            className="relative py-20 bg-cover bg-center"
            style={{
                backgroundImage: "url('/path/to/your/background-image.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
            >
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg font-light max-w-xl mx-auto">
                        Find answers to the most common questions about our shipping services.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left bg-gray-800 bg-opacity-90 hover:bg-opacity-100 transition-colors rounded-lg"
                            >
                                <span className="text-xl font-semibold">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="h-6 w-6 text-gray-300" />
                                ) : (
                                    <Plus className="h-6 w-6 text-gray-300" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 bg-gray-700 bg-opacity-80 rounded-b-lg">
                                            <p className="text-gray-200 text-base font-light">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
