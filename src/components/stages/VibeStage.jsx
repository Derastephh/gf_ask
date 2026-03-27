import React from "react";
import { motion } from "framer-motion";
import { VIBES } from "../../data/gameData";

export const VibeStage = ({ selectedVibe, onVibeSelect }) => {
    return (
        <div className="space-y-3">
            {/* PERSONALIZE: This opening sets the tone. Make it feel like it's about them specifically. */}
            <p className="text-slate-100 text-sm italic">Choose the vibe that feels most like us right now. This will shape what comes next.</p>
            <div className="grid gap-3 md:grid-cols-2">
                {VIBES.map((vibe) => (
                    <motion.button
                        key={vibe.id}
                        type="button"
                        onClick={() => onVibeSelect(vibe.id)}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: VIBES.indexOf(vibe) * 0.05 }}
                        className={`rounded-2xl border-2 overflow-hidden bg-gradient-to-br p-4 text-left transition transform ${selectedVibe === vibe.id
                            ? "border-white bg-white/20 shadow-lg"
                            : "border-white/20 bg-white/10 hover:border-white/40"
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-3xl">{vibe.icon}</span>
                            <div className="min-w-0">
                                <p className="font-bold text-white">{vibe.label}</p>
                                <p className="text-xs text-slate-200 mt-1">{vibe.description}</p>
                            </div>
                        </div>
                        {selectedVibe === vibe.id && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="mt-2 text-xs font-semibold text-white"
                            >
                                ✓ Selected
                            </motion.div>
                        )}
                    </motion.button>
                ))}
            </div>
            {selectedVibe && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-200"
                >
                    {/* PERSONALIZE: Reference how their choice connects to something you know about them */}
                    ✓ Perfect. Your {VIBES.find((v) => v.id === selectedVibe)?.label} energy sets the tone for what's ahead.
                </motion.div>
            )}
        </div>
    );
};
