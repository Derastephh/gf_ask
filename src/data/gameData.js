// =====================
// Vibe / Path data structure
// =====================
// Every choice here will influence the energy of your journey.
// These vibes represent different ways we connect—pick the one that feels most like "us" right now.
export const VIBES = [
    {
        id: "sweet",
        label: "Sweet",
        description: "Soft, tender, and heartfelt moments",
        icon: "🍭",
        color: "from-pink-400 to-rose-400",
    },
    {
        id: "chaotic",
        label: "Chaotic",
        description: "Fun, wild, and hilariously unpredictable",
        icon: "⚡",
        color: "from-yellow-400 to-orange-400",
    },
    {
        id: "soft",
        label: "Soft",
        description: "Calm, peaceful, and deeply comforting",
        icon: "☁️",
        color: "from-blue-400 to-cyan-400",
    },
    {
        id: "adventure",
        label: "Adventure",
        description: "Bold, thrilling, and full of surprises",
        icon: "🚀",
        color: "from-purple-400 to-indigo-400",
    },
];

// =====================
// Stage 2: Quiz Questions
// =====================
// PERSONALIZE: Consider tailoring the answers to match actual preferences you know about them.
export const QUIZ_QUESTIONS = [
    {
        id: "cozy-spot",
        question: "Where do you feel most at ease?",
        emoji: "🛋️",
        answers: ["Cozy indoors with soft textures", "Out in nature", "A quiet cafe", "Somewhere new to explore"],
    },
    {
        id: "comfort-snack",
        question: "What small thing always makes you smile?",
        emoji: "🍫",
        answers: ["Something sweet and indulgent", "A refreshing bite", "Something warm and comforting", "A favorite treat"],
    },
    {
        id: "free-afternoon",
        question: "What does your perfect afternoon look like?",
        emoji: "☀️",
        answers: ["Creating or building something", "Getting lost somewhere new", "Quiet time with a good book or music", "An adventure or activity"],
    },
    {
        id: "surprise",
        question: "What kind of surprise would delight you?",
        emoji: "🎁",
        answers: ["Something thoughtfully chosen", "An unexpected adventure", "A moment of genuine laughter", "Your favorite thing done perfectly"],
    },
    {
        id: "setting",
        question: "Which setting makes you feel most yourself?",
        emoji: "✨",
        answers: ["Under stars or in nature", "By the water, waves and all", "Where city lights glow", "Mountains, high and free"],
    },
    {
        id: "celebrate",
        question: "How do you celebrate big moments?",
        emoji: "🎉",
        answers: ["Intimate and close", "Wild and joyful", "Calm and meaningful", "Bold and adventurous"],
    },
];

// =====================
// Stage 3: Memory Card Game
// =====================
export const MEMORY_CARDS = [
    { id: 0, pairId: "pair-1", emoji: "😊", word: "Sunny" },
    { id: 1, pairId: "pair-1", emoji: "😊", word: "Sunny" },
    { id: 2, pairId: "pair-2", emoji: "✨", word: "Spark" },
    { id: 3, pairId: "pair-2", emoji: "✨", word: "Spark" },
    { id: 4, pairId: "pair-3", emoji: "🎶", word: "Cozy" },
    { id: 5, pairId: "pair-3", emoji: "🎶", word: "Cozy" },
    { id: 6, pairId: "pair-4", emoji: "💫", word: "Chill" },
    { id: 7, pairId: "pair-4", emoji: "💫", word: "Chill" },
];

// =====================
// Stage 4: Message Fragments
// =====================
export const MESSAGE_FRAGMENTS = [
    {
        id: "frag-1",
        emoji: "😄",
        text: "Your humor has this way of catching people off guard. It's effortless.",
        tone: "playful",
    },
    {
        id: "frag-2",
        emoji: "☕",
        text: "Being around you feels uncomplicated. Like things just make sense.",
        tone: "personal",
    },
    {
        id: "frag-3",
        emoji: "🌙",
        text: "You have this way of making me notice things differently. Making me want to be better.",
        tone: "personal",
    },
    {
        id: "frag-4",
        emoji: "💝",
        text: "I keep finding new things about you that surprise me. Different sides. All interesting.",
        tone: "warm",
    },
    {
        id: "frag-5",
        emoji: "✨",
        text: "There's something I've been wanting to say. Something worth the risk. Time to tell you.",
        tone: "warm",
    },
];

// =====================
// Stage 5: Final Romantic Reveal
// =====================
// PERSONALIZE: This is the moment. Make it deeply, confidently true.
// The preamble shows vulnerability and stakes (this matters to you)
// The mainMessage is your "why" (make it specific to them, not generic)
// The successMessage is your promise (what comes next, what they mean)
export const REVEAL_CONFIG = {
    preamble: "I've loved every moment of this with you. But I have to be honest now—there's something I need to ask you, something that's been on my mind every day. Something real.",
    mainMessage: "You make every ordinary day feel extraordinary. You see me completely, and you make me want to be better. I've never been more sure of anything: I want you to be my girlfriend. I want to choose you, keep choosing you, and build something real together.",
    question: "Will you be my girlfriend?",
    yesOptions: ["Yes!", "Absolutely!"],
    successMessage: "You just made me the happiest person alive. I can't wait to spend every moment showing you how much this means—showing you how much *you* mean. Thank you for saying yes. 💕",
};

// =====================
// Stage data structure
// =====================
export const STAGES = [
    {
        id: "vibe",
        label: "Pick Your Vibe",
        subtitle: "How do you want to feel today?",
        type: "choice",
    },
    {
        id: "quiz",
        label: "Quick Quiz",
        subtitle: "Answer some fun preference questions",
        type: "quiz",
    },
    {
        id: "mini",
        label: "Memory Game",
        subtitle: "Match the pairs and collect the words",
        type: "mini",
        placeholder: "(Puzzles coming soon)",
    },
    {
        id: "unlock",
        label: "Unlock Fragments",
        subtitle: "Five intriguing things to discover",
        type: "unlock",
        fragments: ["♥", "Sweet", "Words", "Waiting"],
    },
    {
        id: "reveal",
        label: "The Big Question",
        subtitle: "The moment everything leads to",
        type: "reveal",
    },
];
