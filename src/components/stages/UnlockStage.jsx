import React from "react";
import { motion } from "framer-motion";
import { MESSAGE_FRAGMENTS } from "../../data/gameData";

export const UnlockStage = ({ unlockedFragments, onUnlock }) => {
    return (
        <div className="space-y-4">
            {/* Progress info */}
            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Unlocked: {unlockedFragments.size} of {MESSAGE_FRAGMENTS.length}
                </p>
                <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(unlockedFragments.size / MESSAGE_FRAGMENTS.length) * 100}%` }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </div>
            </div>

            {/* PERSONALIZE: This text appears at the top. Make it feel like the moment before you share something vulnerable. */}
            <p className="text-sm text-slate-100 italic">These are words I've been wanting to say to you. Unlock each one to hear my heart.</p>

            {/* Fragment cards grid */}
            <div className="space-y-3 my-6">
                {MESSAGE_FRAGMENTS.map((fragment, idx) => {
                    const isUnlocked = unlockedFragments.has(fragment.id);
                    return (
                        <motion.button
                            key={fragment.id}
                            type="button"
                            onClick={() => onUnlock(fragment.id)}
                            disabled={isUnlocked}
                            className="w-full text-left"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={!isUnlocked ? { scale: 1.02 } : {}}
                            whileTap={!isUnlocked ? { scale: 0.98 } : {}}
                        >
                            <div
                                className={`rounded-2xl border-2 p-5 transition overflow-hidden relative ${isUnlocked
                                    ? "border-rose-400/50 bg-gradient-to-br from-rose-500/20 to-pink-500/10"
                                    : "border-white/20 bg-white/10 cursor-pointer hover:border-white/40 hover:bg-white/15"
                                    }`}
                            >
                                {/* Lock icon / unlock indicator */}
                                <div className="flex items-start gap-3">
                                    <motion.span
                                        className="text-2xl flex-shrink-0"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: idx * 0.05 + 0.1, type: "spring", stiffness: 200 }}
                                    >
                                        {isUnlocked ? fragment.emoji : "🔒"}
                                    </motion.span>

                                    <div className="min-w-0 flex-1">
                                        {!isUnlocked ? (
                                            <p className="text-sm font-semibold text-slate-300">
                                                Message {idx + 1}
                                            </p>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, filter: "blur(4px)" }}
                                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                                transition={{ delay: 0.2, duration: 0.4 }}
                                            >
                                                <p className="text-sm font-medium text-slate-100 leading-relaxed">
                                                    {fragment.text}
                                                </p>
                                                <p className="text-xs text-rose-300/70 mt-2 capitalize">
                                                    {fragment.tone}
                                                </p>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Unlock indicator pulse */}
                                    {!isUnlocked && (
                                        <motion.div
                                            className="text-xs font-bold text-rose-400 flex-shrink-0"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            ✨
                                        </motion.div>
                                    )}
                                </div>

                                {/* Glow effect when unlocked */}
                                {isUnlocked && (
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-rose-500/20 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: [0.3, 0, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Completion transition screen */}
            {unlockedFragments.size === MESSAGE_FRAGMENTS.length && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="rounded-2xl border border-rose-300/40 bg-gradient-to-br from-rose-500/20 to-pink-500/15 p-6 text-center"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                        className="text-5xl mb-3"
                    >
                        💌
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-lg font-bold text-rose-100 mb-2">
                            {/* PERSONALIZE: Transition phrase just before the reveal */}
                            Now you know exactly how I feel.
                        </p>
                        <p className="text-sm text-rose-200 mb-4">
                            Everything has been leading to this moment.
                        </p>
                        <p className="text-xs text-rose-300/70">
                            One more thing to ask you...
                        </p>
                    </motion.div>

                    {/* Decorative sparkles */}
                    <motion.div
                        className="mt-4 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            >
                                ✨
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            )}

            {/* Hint */}
            {unlockedFragments.size < MESSAGE_FRAGMENTS.length && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
                    <p>💡 Each message is something I need you to know. Don't skip any.</p>
                </div>
            )}
        </div>
    );
};
