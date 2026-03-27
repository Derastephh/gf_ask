import React from "react";
import { motion } from "framer-motion";
import { MEMORY_CARDS } from "../../data/gameData";

export const MemoryStage = ({ memoryCards, matchedPairs, flipped, onCardClick }) => {
    return (
        <div className="space-y-4">
            {/* Game progress */}
            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Matched: {matchedPairs.size} of {MEMORY_CARDS.length / 2}
                </p>
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(matchedPairs.size / (MEMORY_CARDS.length / 2)) * 100}%` }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </div>
            </div>

            {/* PERSONALIZE: This sets what the game means. Make it about them. */}
            <p className="text-sm text-slate-100 italic">Each pair is a way you make me feel. Find them all to see the whole picture.</p>

            {/* Memory card grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 my-6">
                {memoryCards.map((card, idx) => {
                    const isFlipped = flipped.includes(idx) || matchedPairs.has(card.pairId);
                    return (
                        <motion.button
                            key={idx}
                            type="button"
                            onClick={() => onCardClick(idx)}
                            disabled={isFlipped && matchedPairs.has(card.pairId)}
                            className="relative aspect-square"
                            whileHover={!matchedPairs.has(card.pairId) ? { scale: 1.05 } : {}}
                            whileTap={!matchedPairs.has(card.pairId) ? { scale: 0.95 } : {}}
                        >
                            {/* Card back (unrevealed) */}
                            <motion.div
                                className={`absolute inset-0 rounded-xl border-2 flex items-center justify-center text-2xl font-bold transition ${isFlipped
                                    ? "bg-transparent border-transparent"
                                    : "bg-gradient-to-br from-purple-500 to-blue-500 border-white/30 cursor-pointer hover:border-white/50"
                                    }`}
                                initial={{ rotateY: 0 }}
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                ?
                            </motion.div>

                            {/* Card front (revealed) */}
                            <motion.div
                                className={`absolute inset-0 rounded-xl border-2 flex items-center justify-center text-3xl transition ${isFlipped
                                    ? "border-white/40 bg-white/10"
                                    : "bg-transparent border-transparent"
                                    } ${matchedPairs.has(card.pairId) ? "bg-emerald-500/20" : ""}`}
                                initial={{ rotateY: -180 }}
                                animate={{ rotateY: isFlipped ? 0 : -180 }}
                                transition={{ duration: 0.3 }}
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                <span>{card.emoji}</span>
                            </motion.div>

                            {/* Matched badge */}
                            {matchedPairs.has(card.pairId) && (
                                <motion.div
                                    className="absolute inset-0 rounded-xl flex items-center justify-center text-xs font-bold text-emerald-200 pointer-events-none"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                >
                                    {card.word}
                                </motion.div>
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Game complete screen */}
            {matchedPairs.size === MEMORY_CARDS.length / 2 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="rounded-xl border border-emerald-300/40 bg-emerald-500/15 p-5 text-center"
                >
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                        className="text-3xl mb-2"
                    >
                        🎉
                    </motion.p>
                    <p className="text-sm font-bold text-emerald-100 mb-1">
                        All matches found!
                    </p>
                    <p className="text-xs text-emerald-200 mb-3">
                        {/* PERSONALIZE: Acknowledge what these words mean about them */}
                        And that's exactly what you are to me.
                    </p>
                    <motion.div
                        className="flex flex-wrap gap-2 justify-center"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {Array.from(matchedPairs).map((pairId) => {
                            const word = memoryCards.find((c) => c.pairId === pairId)?.word;
                            return (
                                <span key={pairId} className="rounded-full bg-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-100">
                                    {word}
                                </span>
                            );
                        })}
                    </motion.div>
                </motion.div>
            )}

            {/* Hint */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-300">
                <p>💡 Each pair represents something true about you. Find them all and keep reading.</p>
            </div>
        </div>
    );
};
