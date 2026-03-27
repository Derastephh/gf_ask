import React from "react";
import { motion } from "framer-motion";

export const LandingScreen = ({ onStart }) => {
    return (
        <motion.div
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4"
        >
            <div className="max-w-md text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Discover
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-lg sm:text-xl text-slate-200 mb-6"
                >
                    I built something random. Let's see what happens.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-sm text-slate-400 mb-8"
                >
                    Quick. Fun. Slightly confusing. You'll see.
                </motion.p>

                <motion.button
                    type="button"
                    onClick={onStart}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-8 py-3 text-lg font-bold text-white shadow-lg hover:shadow-xl transition"
                >
                    Let's Go
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-xs text-slate-500 mt-6"
                >
                    Takes about 2 minutes • No prior knowledge needed
                </motion.p>
            </div>
        </motion.div>
    );
};
