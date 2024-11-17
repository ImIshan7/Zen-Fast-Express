import React, { useState } from 'react';
import { Search, Loader2, AlertCircle, Package, MapPin, Calendar, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrackingService, TrackingResult } from '../utils/tracking';

export default function TrackingForm() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState<TrackingResult | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setResult(null);

        if (!trackingNumber.trim()) {
            setError('Please enter a tracking number');
            return;
        }

        const trackingService = TrackingService.getInstance();

        if (!trackingService.validateTrackingNumber(trackingNumber)) {
            setError('Invalid tracking number format');
            return;
        }

        setLoading(true);

        try {
            const trackingResult = await trackingService.track(trackingNumber);
            setResult(trackingResult);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <motion.form
                onSubmit={handleSubmit}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <div className="relative group">
                            <input
                                type="text"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value.trim())}
                                placeholder="Enter your tracking number"
                                className="w-full px-4 py-4 pl-12 rounded-xl border-2 border-gray-700 bg-gray-800/50
                         text-white placeholder-gray-400 font-light
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-300"
                                disabled={loading}
                            />
                            <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400
                                group-hover:text-blue-500 transition-colors" />
                            <motion.div
                                className="absolute inset-0 border-2 border-blue-500/0 rounded-xl pointer-events-none"
                                animate={{ opacity: loading ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ opacity: 0 }}
                            />
                        </div>
                        <AnimatePresence>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center"
                                >
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {error}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-blue-600 to-blue-700
                     hover:from-blue-500 hover:to-blue-600
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300 flex items-center justify-center gap-2
                     shadow-lg hover:shadow-blue-500/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {loading ? (
                            <Loader2 className="animate-spin h-5 w-5" />
                        ) : (
                            <>
                                <Search className="h-5 w-5" />
                                Track Package
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.form>

            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-12 bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700"
                    >
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="tracking-card"
                                >
                                    <Package className="tracking-icon" />
                                    <div>
                                        <p className="text-sm text-gray-400 font-light">Tracking Number</p>
                                        <p className="font-semibold text-white">{result.trackingNumber}</p>
                                        <p className="text-sm text-blue-400">{result.carrier}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="tracking-card"
                                >
                                    <MapPin className="tracking-icon" />
                                    <div>
                                        <p className="text-sm text-gray-400 font-light">Current Location</p>
                                        <p className="font-semibold text-white">{result.currentLocation || 'N/A'}</p>
                                        <p className="text-sm text-blue-400">{result.status}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="tracking-card"
                                >
                                    <Calendar className="tracking-icon" />
                                    <div>
                                        <p className="text-sm text-gray-400 font-light">Estimated Delivery</p>
                                        <p className="font-semibold text-white">{result.estimatedDelivery || 'N/A'}</p>
                                        <p className="text-sm text-gray-400">Last Updated: {new Date(result.lastUpdated).toLocaleString()}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 border-t border-gray-700">
                            <h3 className="text-lg font-semibold text-white mb-6">Tracking History</h3>
                            <div className="space-y-6">
                                {result.updates.map((update, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                {index === 0 ? (
                                                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                                                ) : (
                                                    <Clock className="h-5 w-5 text-gray-400" />
                                                )}
                                            </div>
                                            {index !== result.updates.length - 1 && (
                                                <div className="absolute top-8 left-1/2 h-full w-0.5 -ml-px bg-gray-700" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium text-white flex items-center gap-2">
                                                {update.status}
                                                {index === 0 && (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                            Latest
                          </span>
                                                )}
                                            </div>
                                            <div className="mt-1 text-sm text-gray-400 font-light">
                                                {update.location} • {new Date(update.timestamp).toLocaleString()}
                                            </div>
                                            {update.details && (
                                                <p className="mt-2 text-sm text-gray-300 font-light">{update.details}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}