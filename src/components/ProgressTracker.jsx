import React from "react";
import { motion } from "framer-motion";
import { STAGES } from "../data/gameData";

export const ProgressTracker = ({ stageIndex }) => {
    return (
        <div className="mb-8 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
                {STAGES.map((stageItem, idx) => (
                    <span key={stageItem.id} className={idx === stageIndex ? "text-white" : "text-slate-300"}>
                        {stageItem.label}
                    </span>
                ))}
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((stageIndex + 1) / STAGES.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 120 }}
                />
            </div>
        </div>
    );
};
