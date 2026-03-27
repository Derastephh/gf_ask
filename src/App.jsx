import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LandingScreen } from "./components/LandingScreen";
import { ProgressTracker } from "./components/ProgressTracker";
import { VibeStage } from "./components/stages/VibeStage";
import { QuizStage } from "./components/stages/QuizStage";
import { MemoryStage } from "./components/stages/MemoryStage";
import { UnlockStage } from "./components/stages/UnlockStage";
import { RevealStage } from "./components/stages/RevealStage";
import { STAGES, MEMORY_CARDS, QUIZ_QUESTIONS, MESSAGE_FRAGMENTS } from "./data/gameData";
import { PAGE_ANIMATION } from "./constants/animations";

export default function App() {
    // Landing & navigation state
    const [showLanding, setShowLanding] = useState(true);
    const [stageIndex, setStageIndex] = useState(0);

    // Stage 1: Vibe selection
    const [selectedVibe, setSelectedVibe] = useState(null);

    // Stage 2: Quiz
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});

    // Stage 3: Memory game
    const [memoryCards, setMemoryCards] = useState(() => {
        const shuffled = [...MEMORY_CARDS].sort(() => Math.random() - 0.5);
        return shuffled.map((card) => ({ ...card, flipped: false, matched: false }));
    });
    const [flipped, setFlipped] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState(new Set());

    // Stage 4: Message fragments
    const [unlockedFragments, setUnlockedFragments] = useState(new Set());

    // Stage 5: Reveal
    const [hasAnsweredYes, setHasAnsweredYes] = useState(false);

    const stage = useMemo(() => STAGES[stageIndex], [stageIndex]);
    const isFirstStage = stageIndex === 0;
    const isLastStage = stageIndex === STAGES.length - 1;

    // =====================
    // Navigation handlers
    // =====================
    const startJourney = () => {
        setShowLanding(false);
    };

    const goNext = () => {
        setStageIndex((prev) => Math.min(prev + 1, STAGES.length - 1));
        if (stageIndex === 1) setCurrentQuizQuestion(0);
        if (stageIndex === 2) resetMemoryGame();
        if (stageIndex === 3) setUnlockedFragments(new Set());
    };

    const goBack = () => {
        setStageIndex((prev) => Math.max(prev - 1, 0));
        if (stageIndex === 1) setCurrentQuizQuestion(0);
        if (stageIndex === 2) resetMemoryGame();
        if (stageIndex === 3) setUnlockedFragments(new Set());
    };

    const restart = () => {
        setShowLanding(true);
        setStageIndex(0);
        setSelectedVibe(null);
        setCurrentQuizQuestion(0);
        setQuizAnswers({});
        resetMemoryGame();
        setUnlockedFragments(new Set());
        setHasAnsweredYes(false);
    };

    // =====================
    // Stage-specific handlers
    // =====================

    // Stage 2: Quiz
    const handleQuizAnswer = (questionId, answer) => {
        setQuizAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
        if (currentQuizQuestion < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuizQuestion((prev) => prev + 1);
        }
    };

    // Stage 3: Memory game
    const handleMemoryCardClick = (cardIndex) => {
        if (
            matchedPairs.has(memoryCards[cardIndex].pairId) ||
            flipped.includes(cardIndex) ||
            flipped.length >= 2
        ) {
            return;
        }

        const newFlipped = [...flipped, cardIndex];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            const [idx1, idx2] = newFlipped;
            if (memoryCards[idx1].pairId === memoryCards[idx2].pairId) {
                setTimeout(() => {
                    setMatchedPairs((prev) => new Set(prev).add(memoryCards[idx1].pairId));
                    setFlipped([]);
                }, 500);
            } else {
                setTimeout(() => {
                    setFlipped([]);
                }, 800);
            }
        }
    };

    const resetMemoryGame = () => {
        const shuffled = [...MEMORY_CARDS].sort(() => Math.random() - 0.5);
        setMemoryCards(shuffled.map((card) => ({ ...card, flipped: false, matched: false })));
        setFlipped([]);
        setMatchedPairs(new Set());
    };

    // Stage 4: Message fragments
    const handleFragmentUnlock = (fragmentId) => {
        setUnlockedFragments((prev) => new Set(prev).add(fragmentId));
    };

    // Stage 5: Reveal
    const handleRevealAnswer = () => {
        setHasAnsweredYes(true);
    };

    // =====================
    // Render
    // =====================
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden relative">
            {/* Soft dreamy animated background gradient + moving shapes */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/35 via-fuchsia-700/15 to-sky-900/35" />
                <motion.div
                    className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"
                    animate={{ x: [0, 24, 0], y: [0, -20, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-2/3 top-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
                    animate={{ scale: [1, 1.12, 1], y: [0, -18, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating particles for landing screen */}
                {showLanding && (
                    <>
                        <motion.div
                            className="absolute top-1/4 left-1/3 text-3xl opacity-40"
                            animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            ✨
                        </motion.div>
                        <motion.div
                            className="absolute top-1/3 right-1/4 text-2xl opacity-30"
                            animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
                            transition={{ duration: 7, repeat: Infinity }}
                        >
                            💫
                        </motion.div>
                        <motion.div
                            className="absolute bottom-1/3 left-1/4 text-2xl opacity-35"
                            animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                        >
                            ⭐
                        </motion.div>
                        <motion.div
                            className="absolute bottom-1/4 right-1/3 text-3xl opacity-40"
                            animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
                            transition={{ duration: 6.5, repeat: Infinity }}
                        >
                            ✨
                        </motion.div>
                    </>
                )}
            </div>

            {/* Landing Screen */}
            <AnimatePresence mode="wait">
                {showLanding && (
                    <LandingScreen onStart={startJourney} />
                )}
            </AnimatePresence>

            {/* Main App Container */}
            {!showLanding && (
                <div className="relative z-10 max-w-xl mx-auto px-4 pb-12 pt-6 sm:px-6">
                    <header className="mb-6 text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
                            Your Experience
                        </h1>
                        {selectedVibe && (
                            <p className="mt-1 text-sm text-slate-300">
                                ✨ {selectedVibe.charAt(0).toUpperCase() + selectedVibe.slice(1)} path
                            </p>
                        )}
                    </header>

                    {/* Progress tracker */}
                    <ProgressTracker stageIndex={stageIndex} />

                    {/* Stage content */}
                    <AnimatePresence mode="wait">
                        <motion.section
                            key={stage.id}
                            variants={PAGE_ANIMATION}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.25 }}
                            className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur"
                        >
                            <h2 className="text-2xl font-bold text-white mb-1">{stage.label}</h2>
                            <p className="text-sm text-slate-200 mb-4">{stage.subtitle}</p>

                            {/* Stage 1: Vibe */}
                            {stage.type === "choice" && (
                                <VibeStage
                                    selectedVibe={selectedVibe}
                                    onVibeSelect={setSelectedVibe}
                                />
                            )}

                            {/* Stage 2: Quiz */}
                            {stage.type === "quiz" && (
                                <QuizStage
                                    currentQuestion={currentQuizQuestion}
                                    quizAnswers={quizAnswers}
                                    onAnswer={handleQuizAnswer}
                                />
                            )}

                            {/* Stage 3: Memory */}
                            {stage.type === "mini" && (
                                <MemoryStage
                                    memoryCards={memoryCards}
                                    matchedPairs={matchedPairs}
                                    flipped={flipped}
                                    onCardClick={handleMemoryCardClick}
                                />
                            )}

                            {/* Stage 4: Unlock */}
                            {stage.type === "unlock" && (
                                <UnlockStage
                                    unlockedFragments={unlockedFragments}
                                    onUnlock={handleFragmentUnlock}
                                />
                            )}

                            {/* Stage 5: Reveal */}
                            {stage.type === "reveal" && (
                                <RevealStage
                                    hasAnsweredYes={hasAnsweredYes}
                                    onAnswer={handleRevealAnswer}
                                />
                            )}
                        </motion.section>
                    </AnimatePresence>

                    {/* Navigation controls - hide on final reveal until answer given */}
                    {!(stageIndex === STAGES.length - 1 && !hasAnsweredYes) && (
                        <div className="mt-6 flex flex-wrap gap-3 justify-between">
                            <button
                                type="button"
                                onClick={goBack}
                                disabled={isFirstStage || stageIndex === STAGES.length - 1}
                                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition"
                            >
                                Back
                            </button>

                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={restart}
                                    className="rounded-xl border border-fuchsia-300/40 bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-fuchsia-100 hover:bg-fuchsia-500/30 transition"
                                >
                                    Restart
                                </button>
                                <button
                                    type="button"
                                    onClick={goNext}
                                    disabled={
                                        isLastStage ||
                                        (isFirstStage && !selectedVibe) ||
                                        (stageIndex === 1 && Object.keys(quizAnswers).length < QUIZ_QUESTIONS.length) ||
                                        (stageIndex === 2 && matchedPairs.size < MEMORY_CARDS.length / 2) ||
                                        (stageIndex === 3 && unlockedFragments.size < MESSAGE_FRAGMENTS.length)
                                    }
                                    className="rounded-xl border border-cyan-300/40 bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-100 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-500/30 transition"
                                >
                                    {isLastStage ? "Done" : "Next"}
                                </button>
                            </div>
                        </div>
                    )}

                    <footer className="mt-6 text-center text-xs text-slate-300">
                        <p>Stage {stageIndex + 1} of {STAGES.length}</p>
                    </footer>
                </div>
            )}
        </div>
    );
}
