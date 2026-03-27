# Refactored App Structure

## 📁 Folder Organization

```
/src
├── App.jsx                           # Main controller (state, navigation, layout)
├── components/
│   ├── LandingScreen.jsx             # Landing page component
│   ├── ProgressTracker.jsx           # Progress bar across all stages
│   └── stages/
│       ├── VibeStage.jsx             # Stage 1: Vibe selection (4 vibe cards)
│       ├── QuizStage.jsx             # Stage 2: 6 playful questions (one at a time)
│       ├── MemoryStage.jsx           # Stage 3: Memory card game (8 cards, 4 pairs)
│       ├── UnlockStage.jsx           # Stage 4: Message fragments (5 messages)
│       └── RevealStage.jsx           # Stage 5: Proposal + celebration
├── data/
│   └── gameData.js                   # All static game data (VIBES, QUIZ_QUESTIONS, etc.)
├── constants/
│   └── animations.js                 # Reusable animation configs (PAGE_ANIMATION, etc.)
└── utils/
    └── celebrationParticles.js       # Safe particle generation utilities
```

---

## 📋 What Moved Where

### `App.jsx` (New - Main Controller)
**Responsibilities:**
- Top-level state management for all stages
- Navigation (goNext, goBack, restart)
- Event handlers that coordinate between components
- Layout shell with background animations
- Landing screen wrapper

**State managed:**
- `showLanding`: Landing vs. stages toggle
- `stageIndex`: Which stage is active
- `selectedVibe`: Stage 1 selection
- `currentQuizQuestion`, `quizAnswers`: Stage 2 data
- `memoryCards`, `flipped`, `matchedPairs`: Stage 3 data
- `unlockedFragments`: Stage 4 data
- `hasAnsweredYes`: Stage 5 state

---

### `data/gameData.js` (New - Static Content)
**Contains all game configuration:**
- `VIBES`: 4 vibe options with icons, labels, descriptions
- `QUIZ_QUESTIONS`: 6 questions with answers
- `MEMORY_CARDS`: 8 cards (4 pairs) with emojis and words
- `MESSAGE_FRAGMENTS`: 5 personal messages
- `REVEAL_CONFIG`: Proposal preamble, message, question, success message
- `STAGES`: Array of 5 stage definitions

**Benefits:**
- Easy to customize content without touching logic
- Centralized game config
- Importable by any component that needs data

---

### `constants/animations.js` (New - Animation Config)
**Contains:**
- `PAGE_ANIMATION`: Stagger + fade transition for stage cards
- `CONFETTI_COLORS`: Array of party colors for confetti

**Benefits:**
- DRY principle: animations defined once, used everywhere
- Easy to tweak timings globally

---

### `utils/celebrationParticles.js` (New - Particle Generation)
**Safe particle generation** (avoids window access in render):
- `generateHeartParticles(count)`: Creates heart particle objects with random trajectories
- `generateConfetti(count)`: Creates confetti particle objects
- `generateSparkles(count)`: Creates sparkle particle objects

**Benefits:**
- Particles generated in useEffect (after mount), not in render
- Separates particle logic from RevealStage component
- Reusable if more celebration effects needed later

---

### `components/LandingScreen.jsx` (New - Extracted)
**What it does:**
- Renders the initial "Discover" screen
- Button to start journey
- Animated entrance

**Props:**
- `onStart`: Callback when user clicks start

---

### `components/ProgressTracker.jsx` (New - Extracted)
**What it does:**
- Displays progress bar + stage labels
- Updates progress bar based on stage

**Props:**
- `stageIndex`: Current stage index

---

### `components/stages/VibeStage.jsx` (New - Stage 1)
**What it does:**
- Renders 4 vibe cards
- Handles vibe selection
- Shows confirmation message

**Props:**
- `selectedVibe`: Currently selected vibe ID
- `onVibeSelect(vibeId)`: Callback for selection

---

### `components/stages/QuizStage.jsx` (New - Stage 2)
**What it does:**
- One question at a time (animated transitions)
- Answer buttons with selection state
- Progress tracker within stage
- Completion message

**Props:**
- `currentQuestion`: Index of current question
- `quizAnswers`: Object of answers by question ID
- `onAnswer(questionId, answer)`: Callback for answer selection

---

### `components/stages/MemoryStage.jsx` (New - Stage 3)
**What it does:**
- Renders 8 memory cards in grid
- 3D flip animations
- Match detection UI
- Completion animation

**Props:**
- `memoryCards`: Array of card objects with flip/match state
- `matchedPairs`: Set of matched pair IDs
- `flipped`: Array of currently flipped card indices
- `onCardClick(cardIndex)`: Callback for card clicks

---

### `components/stages/UnlockStage.jsx` (New - Stage 4)
**What it does:**
- Renders 5 message cards
- Lock/unlock states with animations
- Shows text + tone on unlock
- Completion screen with envelope icon

**Props:**
- `unlockedFragments`: Set of unlocked fragment IDs
- `onUnlock(fragmentId)`: Callback for unlock

---

### `components/stages/RevealStage.jsx` (New - Stage 5)
**What it does:**
- Two-screen experience: question → success
- Celebration particles (hearts, confetti, sparkles)
- Uses useEffect to safely generate particles after mount

**Props:**
- `hasAnsweredYes`: Boolean for showing success screen
- `onAnswer()`: Callback for answer button

**Key improvement:**
- Particles generated in useEffect, not in render
- Uses component state for safely storing particle data
- Avoids window.innerWidth/Height during render

---

## 🔄 Data Flow

```
App.jsx (state, handlers)
  ↓
  ├─→ LandingScreen (prop: onStart)
  ├─→ ProgressTracker (prop: stageIndex)
  └─→ Stage Component (stage.type decides which)
      ├─→ VibeStage (props: selectedVibe, onVibeSelect)
      ├─→ QuizStage (props: currentQuestion, quizAnswers, onAnswer)
      ├─→ MemoryStage (props: cards, pairs, flipped, onCardClick)
      ├─→ UnlockStage (props: fragments, onUnlock)
      └─→ RevealStage (props: hasAnsweredYes, onAnswer)
```

---

## ✅ Refactoring Checklist

- ✅ **All data extracted to `gameData.js`** - Single source of truth
- ✅ **Components receive data via props** - Clean, predictable interface
- ✅ **State management centralized in App.jsx** - Easy to track flow
- ✅ **Animations preserved** - All transitions + micro-interactions intact
- ✅ **Window access moved to useEffect** - RevealStage uses safe particle generation
- ✅ **No Tailwind dynamic classes** - All classes explicit
- ✅ **Props are simple & readable** - No complex nested objects
- ✅ **Reusable components** - Easy to extend or modify
- ✅ **Clean folder structure** - Organized by purpose

---

## 🚀 Advantages of Refactoring

1. **Maintainability**: Change game content in `gameData.js`, logic in components
2. **Reusability**: Components can be used elsewhere or cloned
3. **Testability**: Each component has clear props, easier to unit test
4. **Scalability**: Easy to add new stages or features
5. **Readability**: Small files = easier to understand
6. **Performance**: Optional: Could add React.memo for stage components later
7. **Onboarding**: New developers can understand structure quickly

---

## 📝 How to Use

### To update game content:
Edit `/src/data/gameData.js` - change questions, messages, vibes, etc.

### To customize animations:
Edit `/src/constants/animations.js`

### To modify a stage's UI:
Edit the corresponding file in `/src/components/stages/`

### To add a new stage:
1. Create `/src/components/stages/NewStage.jsx`
2. Add stage definition to `STAGES` in `gameData.js`
3. Add logic handler in `App.jsx`
4. Add conditional render in App.jsx stage section

---

## 🎯 Import Paths

All imports are relative to their location. Examples:

```jsx
// From App.jsx
import { LandingScreen } from "./components/LandingScreen";
import { STAGES } from "./data/gameData";

// From VibeStage.jsx (in components/stages/)
import { VIBES } from "../../data/gameData";

// From RevealStage.jsx
import { generateHeartParticles } from "../../utils/celebrationParticles";
```

---

## 🔮 Future Improvements

- Add React Context for deeply nested props (currently simple enough without)
- Add React.memo() to stage components for performance
- Add localStorage to persist progress
- Add custom hooks (useMemoryGame, useQuiz) to further extract logic
- Add unit tests (Jest + React Testing Library)
- Add E2E tests (Cypress)
