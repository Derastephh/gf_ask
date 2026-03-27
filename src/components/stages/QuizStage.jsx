import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS } from "../../data/gameData";

export const QuizStage = ({ currentQuestion, quizAnswers, onAnswer }) => {
    const question = QUIZ_QUESTIONS[currentQuestion];

    return (
        <div className="space-y-4">
            {/* Quiz progress indicator */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
                </p>
                <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </div>
            </div>

            {/* Curious opener on first question */}
            {currentQuestion === 0 && (
                <p className="text-sm text-slate-200 italic mb-2">
                    Quick personality check. Answer what feels right.
                </p>
            )}

            {/* Current question card */}
            <AnimatePresence mode="wait">
                {question && (
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-5"
                    >
                        {/* Question header with emoji */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">{question.emoji}</span>
                            <h3 className="text-lg font-bold text-white">
                                {question.question}
                            </h3>
                        </div>

                        {/* Answer options grid */}
                        <div className="space-y-2">
                            {question.answers.map((answer, idx) => {
                                const isSelected = quizAnswers[question.id] === answer;
                                return (
                                    <motion.button
                                        key={answer}
                                        type="button"
                                        onClick={() => onAnswer(question.id, answer)}
                                        whileHover={{ x: 4, scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.06 }}
                                        className={`w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition ${isSelected
                                            ? "border-cyan-400 bg-cyan-500/20 text-cyan-100 shadow-lg shadow-cyan-500/30"
                                            : "border-white/20 bg-white/5 text-slate-100 hover:border-white/40 hover:bg-white/10"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{answer}</span>
                                            {isSelected && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="text-lg"
                                                >
                                                    ✓
                                                </motion.span>
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Confirmation message */}
                        {quizAnswers[question.id] && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-200"
                            >
                                {currentQuestion === QUIZ_QUESTIONS.length - 1
                                    ? "✨ You did it! All your answers paint such a clear picture of who you are to me."
                                    : "✨ Got it. Moving on..."}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quiz completion summary */}
            {currentQuestion === QUIZ_QUESTIONS.length - 1 &&
                quizAnswers[question?.id] && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border border-purple-300/40 bg-purple-500/10 p-4 text-center"
                    >
                        <p className="text-sm font-semibold text-purple-100">
                            ✨ That's everything I needed to remember...
                        </p>
                        <p className="text-xs text-slate-300 mt-2">
                            Ready to continue? I have something to show you.
                        </p>
                    </motion.div>
                )}
        </div>
    );
};
