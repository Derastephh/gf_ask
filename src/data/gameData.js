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
// These questions help me remind myself why you're so special to me.
// PERSONALIZE: Consider tailoring the answers to match actual preferences you know about them.
export const QUIZ_QUESTIONS = [
    {
        id: "cozy-spot",
        question: "Where do you feel most at peace with me?",
        emoji: "🛋️",
        answers: ["Wrapped up together indoors", "Out in nature, just us", "At a quiet cafe", "Exploring somewhere new"],
    },
    {
        id: "comfort-snack",
        question: "What small thing always makes you smile?",
        emoji: "🍫",
        answers: ["Something sweet and indulgent", "A refreshing bite", "Something warm and comforting", "Sharing a treat"],
    },
    {
        id: "free-afternoon",
        question: "How would your perfect afternoon with me look?",
        emoji: "☀️",
        answers: ["Creating or building something", "Getting lost somewhere new", "Quiet time talking and laughing", "An adventure or activity"],
    },
    {
        id: "surprise",
        question: "What kind of surprise would make your heart skip a beat?",
        emoji: "🎁",
        answers: ["Something thoughtful I planned", "An unexpected adventure", "A moment of pure connection", "Your favorite thing done perfectly"],
    },
    {
        id: "setting",
        question: "Which setting makes you feel most yourself?",
        emoji: "✨",
        answers: ["Under stars or in nature", "By the water, waves and all", "Where city lights glow", "Mountains, high and free"],
    },
    {
        id: "celebrate",
        question: "How do you want to celebrate the big moments?",
        emoji: "🎉",
        answers: ["Intimate, just us", "Wild and joyful", "Calm and meaningful", "Bold and adventurous"],
    },
];

// =====================
// Stage 3: Memory Card Game
// =====================
// Each pair celebrates a way you make me feel. Match them to remind yourself how seen you are.
export const MEMORY_CARDS = [
    { id: 0, pairId: "pair-1", emoji: "😊", word: "Understood" },
    { id: 1, pairId: "pair-1", emoji: "😊", word: "Understood" },
    { id: 2, pairId: "pair-2", emoji: "✨", word: "Radiant" },
    { id: 3, pairId: "pair-2", emoji: "✨", word: "Radiant" },
    { id: 4, pairId: "pair-3", emoji: "🎶", word: "Comfortable" },
    { id: 5, pairId: "pair-3", emoji: "🎶", word: "Comfortable" },
    { id: 6, pairId: "pair-4", emoji: "💫", word: "Home" },
    { id: 7, pairId: "pair-4", emoji: "💫", word: "Home" },
];

// =====================
// Stage 4: Message Fragments
// =====================
// PERSONALIZE: These are your most important moments to shine. Make each one deeply true for them.
// Fragment 1 should be playful and easy (show they make you laugh effortlessly)
// Fragment 2 should become personal (about moments of pure presence together)
// Fragment 3 should deepen (show emotional growth with them)
// Fragment 4 should warm (describe the blend of all they are to you)
// Fragment 5 should be your most heartfelt commitment (the "forever" moment)
export const MESSAGE_FRAGMENTS = [
    {
        id: "frag-1",
        emoji: "😄",
        text: "You make me laugh in ways only you can—without even trying.",
        tone: "playful",
    },
    {
        id: "frag-2",
        emoji: "☕",
        text: "I love those quiet moments with you. No phones, no plans—just us existing together feeling completely enough.",
        tone: "personal",
    },
    {
        id: "frag-3",
        emoji: "🌙",
        text: "You've changed what I'm capable of feeling. You make me want to be braver, kinder, and more myself.",
        tone: "personal",
    },
    {
        id: "frag-4",
        emoji: "💝",
        text: "You're my favorite adventure, my favorite place to rest, my favorite reason to come home.",
        tone: "warm",
    },
    {
        id: "frag-5",
        emoji: "✨",
        text: "I want to build a life where we choose each other every single day. Where you know, completely, that you're loved.",
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
        label: "Get to Know You",
        subtitle: "Let me remind myself why you're so special",
        type: "quiz",
    },
    {
        id: "mini",
        label: "Mini Matching Game",
        subtitle: "Celebrate what makes you... you",
        type: "mini",
        placeholder: "(Puzzles coming soon)",
    },
    {
        id: "unlock",
        label: "Unlock Message Fragments",
        subtitle: "Words I've been wanting to say",
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
