# 💕 Personalization Guide

This guide shows you exactly where to customize the experience to make it deeply personal for her.

## 🎯 Emotional Journey Arc

The experience follows this emotional progression to avoid being too romantic too early:

1. **Landing Screen** - **Mysterious, warm**
   - "Something special is waiting" (keeps the mystery alive)

2. **Stage 1: Vibe Selection** - **Intriguing, light**
   - Helps *you* set the tone, not too revealing yet

3. **Stage 2: Quiz** - **Playful, connective**
   - Questions about her preferences feel like a fun personality game
   - Subtly shows you pay attention to her details

4. **Stage 3: Memory Game** - **Celebratory, intimate**
   - Words describe how she makes you feel
   - Builds emotional temperature but still playful

5. **Stage 4: Message Fragments** - **Vulnerable, heartfelt**
   - Graduated reveal from playful → personal → deeply warm
   - This is where romance becomes clear

6. **Stage 5: Final Reveal** - **Bold, committed, confident**
   - No ambiguity left—this is the moment

---

## ✏️ Personalization Checklist

### 🎬 Top Priority - These are the most emotional/important

#### 1. **Landing Preamble** (if you want to add it)
**File:** `src/components/LandingScreen.jsx` (lines ~33-36)

Current: "Something special is waiting. But first, I want to remind myself why you mean so much to me."

**PERSONALIZE:** Add a specific reference to why *this moment* matters right now.

Examples:
- "Been thinking about forever with you. Let me show you why."
- "I have something to ask you. But I want to remind you first..."
- "Remember that conversation we had? This is what I've been planning."

---

#### 2. **Quiz Questions** (Stage 2 - Very Important)
**File:** `src/data/gameData.js` (lines 30-70)

The questions themselves probe preferences, but the *answers* should match what you know about her.

**Current answers are generic. PERSONALIZE each to match her actual preferences:**

```javascript
{
    id: "cozy-spot",
    question: "Where do you feel most at peace with me?",
    // If she loves rooftops: ["Our rooftop at sunset", "Curled up inside", "At a quiet cafe", "Exploring somewhere new"]
    // If she loves nature: ["Out in nature with your hand in mine", "Wrapped up together indoors", "At a quiet cafe", "Exploring somewhere new"]
    answers: ["Wrapped up together indoors", "Out in nature, just us", "At a quiet cafe", "Exploring somewhere new"],
},
```

**Tips for personalizing quiz answers:**
- **Replace generic answers with specific memories or inside references**
- Keep one answer that matches her actual preference in each question
- Others can be real options too, but lean toward ones you know her style

Example personalization:
```javascript
// Generic version:
answers: ["Chocolate or sweets", "Fresh fruit", "Pizza or savory", "Ice cream or frozen treats"]

// Personalized version (if she loves coffee):
answers: ["Your signature coffee order that I always get wrong", "Fresh fruit", "Pizza or savory", "That ice cream place we found"]
```

---

#### 3. **Memory Card Words** (Stage 3 - Important but can be generic)
**File:** `src/data/gameData.js` (lines ~72-82)

Current words: "Understood", "Radiant", "Comfortable", "Home"

These are solid but could be MORE specific to her.

**PERSONALIZE:** Replace with qualities that are *uniquely* her.

Examples of more specific words:
- Instead of "Understood" → "Listened to" or "Seen"
- Instead of "Radiant" → "Glowing" or "Brilliant"
- Instead of "Comfortable" → "Safe" or "Held"
- Instead of "Home" → "Everything" or "Peace"

Or even more specific to your relationship:
- "Brave" (if she's courageous)
- "Hilarious" (if she makes you laugh)
- "Tender" (if she's soft-hearted)
- "Wild" (if she's adventurous)

---

#### 4. **Message Fragments** (Stage 4 - **MOST IMPORTANT TO PERSONALIZE**)
**File:** `src/data/gameData.js` (lines ~84-110)

**These are your most powerful moment.** Each fragment builds emotionally. Make them deeply true.

Structure:
- **Fragment 1 (Playful)** - Light, easy to share, shows she makes you laugh
- **Fragment 2 (Personal)** - Moments of real presence together
- **Fragment 3 (Personal-Warm)** - How she's changed you emotionally
- **Fragment 4 (Warm)** - Blend of what she means to you across contexts
- **Fragment 5 (Warmest/Most Vulnerable)** - The forever commitment

**Current example:**
```javascript
{
    id: "frag-1",
    emoji: "😄",
    text: "You make me laugh in ways only you can—without even trying.",
    tone: "playful",
}
```

**PERSONALIZE with specificity:**

Instead of generic "you make me laugh," reference a specific thing:
```javascript
{
    id: "frag-1",
    emoji: "😄",
    text: "The way you laugh at your own jokes before telling them kills me every time.",
    tone: "playful",
}

// OR if she's terrible at remembering things:
{
    id: "frag-1",
    emoji: "😄",
    text: "You forget punchlines mid-joke and somehow that's the funniest part.",
    tone: "playful",
}

// OR if she has a great sense of humor:
{
    id: "frag-1",
    emoji: "😄",
    text: "You get my weird jokes before I even finish saying them—nobody else does that.",
    tone: "playful",
}
```

**Same level of specificity for Fragment 2 (personal moments):**

Instead of: "I love those quiet moments with you. No phones, no plans—just us existing together..."

Make it specific:
```javascript
{
    id: "frag-2",
    emoji: "☕",
    text: "4 AM conversations on your kitchen floor, where you tell me things you've never told anyone.",
    tone: "personal",
}

// OR if she loves morning cuddles:
{
    id: "frag-2",
    emoji: "☕",
    text: "Sunday mornings when neither of us wants to get up and we just talk for hours.",
    tone: "personal",
}

// OR if she has a thoughtful way of seeing things:
{
    id: "frag-2",
    emoji: "☕",
    text: "The way you listen—really listen—makes me feel truly known.",
    tone: "personal",
}
```

**Fragment 5 is your deepest commitment—make it real:**

Instead of: "I want to build a life where we choose each other every single day..."

Make it specific to what *you* promise:
```javascript
{
    id: "frag-5",
    emoji: "✨",
    text: "I want to be the person who knows your coffee order by heart, who shows up when you're scared, who chooses you on the hard days.",
    tone: "warm",
}

// OR if marriage is where this is going:
{
    id: "frag-5",
    emoji: "✨",
    text: "I want to marry you. To wake up to you. To build a home with you that's as warm as you make me feel.",
    tone: "warm",
}

// OR if you want to keep it about the relationship itself:
{
    id: "frag-5",
    emoji: "✨",
    text: "I want to fight with you and make up with you and grow with you and never stop choosing you. Every single day.",
    tone: "warm",
}
```

---

#### 5. **Final Reveal Message** (Stage 5 - **CRITICAL - MAKE IT YOURS**)
**File:** `src/data/gameData.js` (lines ~113-121)

This is THE moment. This should be entirely in your voice.

**Current template:**
```javascript
export const REVEAL_CONFIG = {
    preamble: "I've had so much fun on this journey with you. But I have to be honest now—there's something I need to ask you, something that's been on my mind every day. Something real.",
    mainMessage: "You make every ordinary day feel extraordinary. You see me completely, and you make me want to be better. I've never been more sure of anything: I want you to be my girlfriend. I want to choose you, keep choosing you, and build something real together.",
    question: "Will you be my girlfriend?",
    yesOptions: ["Yes!", "Absolutely!"],
    successMessage: "You just made me the happiest person alive. I can't wait to spend every moment showing you how much this means—showing you how much *you* mean. Thank you for saying yes. 💕",
};
```

**REWRITE this entirely with:**
- **Preamble:** Why is this moment happening? Reference something real.
- **Main Message:** Why HER specifically? What makes her different? Be vulnerable.
- **Success Message:** What comes next? What's your promise?

Example of more personal version:
```javascript
export const REVEAL_CONFIG = {
    preamble: "I've been planning this for weeks. I wanted to remind myself—and show you—why I'm so sure about us. This isn't a question I'm asking lightly.",
    
    mainMessage: "You are the bravest, kindest, funniest person I know. You challenge me to be better, you make ordinary days feel like adventures, and you love me even on my worst days. There's no one else I want by my side. Will you let me spend my life making you feel as loved as you make me feel?",
    
    question: "Will you be my girlfriend?",
    
    yesOptions: ["Yes!", "Absolutely!"],
    
    successMessage: "I'm going to spend every day making sure you never regret this. Let's build something beautiful together. I love you so much. 💕",
};
```

---

### 📝 Secondary Personalization - These enhance the experience

#### 6. **Vibe Selection Confirmation** (Nice to personalize)
**File:** `src/components/stages/VibeStage.jsx` (around line 58)

Current: "✓ Perfect. Your {vibe} energy sets the tone for what's ahead."

**Optional prettier version:**
```javascript
// If she picked Sweet:
"✓ Sweet—just like you. Let's see where this goes."

// If she picked Chaotic:
"✓ Chaotic—I like that about you. Here we go..."

// If she picked Soft:
"✓ Soft—that's where my heart is with you."

// If she picked Adventure:
"✓ Adventure—but the best adventure is you."
```

---

#### 7. **Quiz Completion Transition** (Nice to personalize)
**File:** `src/components/stages/QuizStage.jsx` (around line 117)

Current: "✨ That's everything I needed to remember... Ready to continue? I have something to show you."

**Options:**
- "✨ Yeah, you. Every part of this."
- "✨ This is why I'm so sure."
- "✨ This is exactly why I love you."
- "✨ This is everything I needed to say—without words."

---

#### 8. **Memory Game Final Words** (Nice to personalize)
**File:** `src/components/stages/MemoryStage.jsx` (around line 122)

Currently shows words like: "Understood", "Radiant", "Comfortable", "Home"

At completion, the message is: "And that's exactly what you are to me."

**This is already pretty good, but you could personalize the words themselves** (covered in #3 above).

---

#### 9. **Unlock Stage Instructions** (Nice to personalize)
**File:** `src/components/stages/UnlockStage.jsx` (around line 20)

Current: "These are words I've been wanting to say to you. Unlock each one to hear my heart."

**Options:**
- "These are words I should have said sooner. Unlock them and know the truth."
- "Five things you need to know. Read these carefully."
- "What I've been feeling. What I'm ready to ask. What I'm sure about."
- "Messages that have been building in my chest for months. Here they are."

---

#### 10. **Success Screen Final Line** (Very important - make it intimate)
**File:** `src/components/stages/RevealStage.jsx` (around line 218)

Current template: "I love you. 💕"

This is perfect but make sure it feels right to you. Other options:
- "I'm in love with you. 💕"
- "You're my person. 💕"
- "Forever with you. 💕"
- "Thank you for saying yes to me. 💕"

---

## 🎨 Editing Workflow

1. **Open `src/data/gameData.js`** - Start here. This has the most important personalization spots.

2. **Personalize in this order:**
   - Message Fragments (most impactful)
   - Final Reveal Message (most emotional)
   - Quiz Answers (should match her preferences)
   - Memory Card Words (can be more specific)
   - Quiz Completion Text (small but meaningful)

3. **Then open component files** for optional refinements:
   - `src/components/LandingScreen.jsx` - Open preamble
   - `src/components/stages/VibeStage.jsx` - Confirmation text
   - `src/components/stages/QuizStage.jsx` - Progress text
   - `src/components/stages/UnlockStage.jsx` - Instructions
   - `src/components/stages/RevealStage.jsx` - Final words

4. **Save and test** - Open `http://localhost:5173` (or your dev server) and go through the full experience.

---

## ✨ Personalization Philosophy

### What Makes It Personal vs. Generic

**Generic (Current defaults):**
- "You make every day better"
- "I love these quiet moments with you"
- "You're my favorite adventure"

**Personal (What you should aim for):**
- "You remember the coffee order I only told you once"
- "3 AM when you're reading to me and I just watch you"
- "Driving nowhere with you, bad music playing, both laughing"

**The difference?** Specificity. Details that only apply to HER.

---

## 💡 Pro Tips

1. **Avoid clichés unless they're YOUR clichés**
   - If you always call her by a nickname, use it
   - If there's an inside joke, reference it
   - If there's a song, a place, a moment that's yours—weave it in

2. **Balance vulnerability and confidence**
   - She should know you're nervous but sure
   - Not "I hope you say yes" — more "I need you to say yes because I can't imagine life without you"

3. **Show specific knowledge**
   - The quiz answers should prove you listen
   - The fragments should show you see her
   - The success message should show you're ready for what's next

4. **Match your voice**
   - If you're funny in real life, be funny here
   - If you're poetic, lean into it
   - If you're direct and honest, be that

5. **Make her laugh**
   - Humor before vulnerability helps her feel safe
   - Laughter opens hearts
   - Stage 1 and 2 should be playful before Stage 4-5 gets real

---

## 🎯 Before You Show Her

Checklist:
- [ ] All quiz answer options feel true to her actual preferences
- [ ] All 5 message fragments are deeply personal, not generic
- [ ] The final reveal message sounds like YOUR voice
- [ ] Success message feels like a real promise you're making
- [ ] You've tested the full flow on your device
- [ ] Animations look smooth
- [ ] You're ready to hit "continue" after she says yes (real proposal moment!)

---

## 📱 Post-Proposal

After she sees this (and hopefully says yes!), remember:
- The experience ends at the success screen
- You'll want to be there in person for the real moment
- This is the setup, not the whole proposal

Make the real moment even better. ✨
