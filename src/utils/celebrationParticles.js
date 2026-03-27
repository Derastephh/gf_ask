// =====================
// Celebration Particles Generator
// =====================

export const generateHeartParticles = (count = 15) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `heart-${i}`,
        type: "heart",
        startX: Math.random() * window.innerWidth,
        startY: window.innerHeight,
        endX: Math.random() * window.innerWidth,
        endY: -100,
        rotation: Math.random() * 360,
        duration: 3 + Math.random() * 2,
    }));
};

export const generateConfetti = (count = 20) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `confetti-${i}`,
        type: "confetti",
        startX: window.innerWidth / 2,
        startY: window.innerHeight / 2,
        endX: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
        endY: window.innerHeight / 2 + (Math.random() - 0.5) * 400,
        duration: 2 + Math.random(),
        color: ["#fca5a5", "#fda4af", "#f472b6", "#ec4899"][i % 4],
    }));
};

export const generateSparkles = (count = 10) => {
    return Array.from({ length: count }, (_, i) => ({
        id: `sparkle-${i}`,
        type: "sparkle",
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: 2 + Math.random() * 1.5,
    }));
};
