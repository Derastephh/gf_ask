import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { REVEAL_CONFIG } from "../../data/gameData";
import { generateHeartParticles, generateConfetti, generateSparkles } from "../../utils/celebrationParticles";

const HeartParticle = ({ particle }) => (
    <motion.div
        className="fixed pointer-events-none text-2xl z-50"
        initial={{
            x: particle.startX,
            y: particle.startY,
            opacity: 1,
        }}
        animate={{
            x: particle.endX,
            y: particle.endY,
            opacity: 0,
            rotate: particle.rotation,
        }}
        transition={{
            duration: particle.duration,
            ease: "easeOut",
        }}
    >
        💕
    </motion.div>
);

const ConfettiParticle = ({ particle }) => (
    <motion.div
        className="fixed pointer-events-none w-2 h-2 rounded-full z-50"
        style={{ backgroundColor: particle.color }}
        initial={{
            x: particle.startX,
            y: particle.startY,
            opacity: 1,
        }}
        animate={{
            x: particle.endX,
            y: particle.endY,
            opacity: 0,
            scale: 0,
        }}
        transition={{
            duration: particle.duration,
            ease: "easeOut",
        }}
    />
);

const SparkleParticle = ({ particle }) => (
    <motion.div
        className="fixed pointer-events-none text-xl z-50"
        initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
        }}
        animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 1, 0],
        }}
        transition={{
            duration: particle.duration,
            ease: "easeInOut",
        }}
    >
        ✨
    </motion.div>
);

export const RevealStage = ({ hasAnsweredYes, onAnswer }) => {
    const [particles, setParticles] = useState({
        hearts: [],
        confetti: [],
        sparkles: [],
    });

    useEffect(() => {
        if (hasAnsweredYes && typeof window !== "undefined") {
            // Generate particles only after component mounts (safe access to window)
            setParticles({
                hearts: generateHeartParticles(15),
                confetti: generateConfetti(20),
                sparkles: generateSparkles(10),
            });
        }
    }, [hasAnsweredYes]);

    if (!hasAnsweredYes) {
        return (
            <div className="space-y-6">
                {/* Preamble - make it vulnerable and real */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl border border-rose-300/30 bg-rose-500/10 p-4"
                >
                    {/* PERSONALIZE: This is your moment. Own it. This preamble should feel deeply true. */}
                    <p className="text-sm text-rose-100 italic">
                        {REVEAL_CONFIG.preamble}
                    </p>
                </motion.div>

                {/* Main romantic message */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="rounded-2xl border-2 border-rose-400/50 bg-gradient-to-br from-rose-500/25 to-pink-500/15 p-6"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                        className="text-4xl mb-4 text-center"
                    >
                        💕
                    </motion.div>
                    <p className="text-base font-medium text-white leading-relaxed text-center">
                        {REVEAL_CONFIG.mainMessage}
                    </p>
                </motion.div>

                {/* The big question */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-center"
                >
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 mb-6">
                        {REVEAL_CONFIG.question}
                    </h3>

                    {/* Answer buttons - both say yes */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {REVEAL_CONFIG.yesOptions.map((option, idx) => (
                            <motion.button
                                key={option}
                                type="button"
                                onClick={() => onAnswer(option)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.08, y: -4 }}
                                whileTap={{ scale: 0.96 }}
                                className="rounded-xl border-2 border-rose-400 bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-lg font-bold text-white shadow-lg hover:shadow-xl transition"
                            >
                                {option}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Gentle encouragement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-center text-xs text-slate-300"
                >
                    {/* PERSONALIZE: This is your last moment to speak directly to them. Make it real. */}
                    (Please say yes. You mean everything to me. 💕)
                </motion.p>
            </div>
        );
    }

    // Success screen
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className="space-y-6"
        >
            {/* Render celebration particles */}
            {particles.hearts.map((heart) => (
                <HeartParticle key={heart.id} particle={heart} />
            ))}
            {particles.confetti.map((confetto) => (
                <ConfettiParticle key={confetto.id} particle={confetto} />
            ))}
            {particles.sparkles.map((sparkle) => (
                <SparkleParticle key={sparkle.id} particle={sparkle} />
            ))}

            {/* Success message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                >
                    🎉
                </motion.div>
            </motion.div>

            {/* Success heart box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="rounded-2xl border-2 border-rose-400/60 bg-gradient-to-br from-rose-500/30 to-pink-500/20 p-7 text-center"
            >
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl mb-4"
                >
                    💕
                </motion.div>

                <p className="text-2xl font-extrabold text-white mb-3">
                    💗 Yes! 💗
                </p>

                <p className="text-base text-rose-100 leading-relaxed mb-4">
                    {/* PERSONALIZE: This is the promise. Make it specific to what comes next for you both. */}
                    {REVEAL_CONFIG.successMessage}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-3 border-t border-rose-300/30"
                >
                    <p className="text-sm text-rose-200 font-semibold">
                        {/* PERSONALIZE: This is your final word. Make it intimate and true. */}
                        I love you. 💕
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
