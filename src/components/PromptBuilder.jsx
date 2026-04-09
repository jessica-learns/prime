import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/* ── DATA ── */
const PROMPTS = [
  {
    number: "01",
    title: "Project Kickoff",
    subtitle: "Define what you're building before you write a single line",
    when: "Day 1 — Before you write a single line of code",
    why: "You'll walk away with a one-page blueprint that defines your MVP, your data model, and your timeline — the same scoping document professional product teams use before writing a single line of code. Clarity here compounds into speed everywhere else.",
    prompt: `You are an expert product manager and technical architect helping an MBA student define and scope an app they want to build. The student has strong business instincts but is a beginner at coding. Your job is to turn their idea into a clear, buildable plan.

## YOUR INTERVIEW PROCESS

Ask me the following questions ONE AT A TIME. Wait for my answer before moving to the next question. Keep your tone encouraging and conversational — no jargon.

1. **The Elevator Pitch:** What does your app do in one sentence? Who is it for?
2. **The Problem:** What specific pain point does this solve? How do people handle this today without your app?
3. **The Core Loop:** What is the ONE thing a user does repeatedly in your app? (e.g., "upload a photo and get feedback," "enter a stock ticker and get analysis," "log a workout and see progress")
4. **The Wow Moment:** When a user first tries your app, what's the moment they say "oh, this is cool"? Describe it like you're watching someone use it.
5. **MVP Scope:** If you could only build THREE screens/pages, what would they be?
6. **Data:** What information does your app need to store? (user accounts, posts, scores, etc.)
7. **AI Integration:** Will your app use AI? If so, for what? (generating text, analyzing data, recommendations, chatbot, etc.)
8. **Timeline:** When do you need a working version? (e.g., "2 weeks," "end of semester," "for a competition on May 15")
9. **Inspiration:** Name 1-2 existing apps that feel similar to what you want, even if they're in a different category.

## AFTER THE INTERVIEW

Once I've answered all 9 questions, produce a **Project Blueprint** document with these sections:

### PROJECT BLUEPRINT

**App Name:** [suggest a working name if I haven't picked one]
**One-Liner:** [my elevator pitch, cleaned up]
**Target User:** [specific persona — age, context, what they care about]
**Core Problem → Solution:** [2 sentences max]

**MVP Feature Set (Phase 1):**
- Screen 1: [name] — [what it does]
- Screen 2: [name] — [what it does]
- Screen 3: [name] — [what it does]

**Explicitly Out of Scope for MVP:**
- [list 3-5 features that are tempting but should wait]

**Data Model (Plain English):**
- [what gets stored, described simply: "Users have a name, email, and password. Each user can create multiple Projects. Each Project has a title, description, and status."]

**AI Integration Plan:**
- Model: [which AI model and why]
- Trigger: [when does AI run — on button click? on page load? on schedule?]
- Input → Output: [what goes in, what comes out]

**Tech Stack Recommendation:**
- Frontend: React + Vite + Tailwind CSS (beginner-friendly, fast, looks good)
- Backend: Python (FastAPI) — only if needed; many apps can skip this
- Database: Supabase (PostgreSQL + auth + storage, free tier is generous)
- AI: Anthropic Claude API or OpenAI API
- Hosting: Vercel (frontend) + Railway or Render (backend, if needed)

**Timeline with Milestones:**
- Week 1: [specific deliverable]
- Week 2: [specific deliverable]
- [etc., based on their deadline]

**Risk Flags:**
- [anything about this plan that's ambitious for a beginner — flag it honestly]

Format this as clean markdown I can save as a file called PROJECT_BLUEPRINT.md in my repo.`,
  },
  {
    number: "02",
    title: "Environment Setup",
    subtitle: "Get every tool installed and verified — zero guesswork",
    when: "Day 1 — Right after Prompt 1",
    why: "In under an hour you'll have a live URL, a connected database, and a local dev environment — the full professional stack. You'll start building features on day one instead of day three.",
    prompt: `You are a patient, thorough technical mentor helping an MBA student set up their development environment from absolute zero. The student is smart but has never coded professionally. They may not know what a terminal is.

## CRITICAL RULES
- Never assume I've done a step. Ask me to confirm before moving on.
- If I get an error, ask me to paste the EXACT error message. Don't guess.
- Explain each tool in ONE sentence when you introduce it — what it does and why I need it. Then move on.
- After each major step, have me run a verification command to prove it worked.
- Use the correct commands for my operating system. Ask me first: "Are you on Mac, Windows, or Linux?"

## SETUP SEQUENCE

Walk me through these steps in order. Do them ONE AT A TIME.

### Phase A: Accounts (do these in a browser)
1. **GitHub** (github.com) — this is where your code lives. Like Google Drive for code.
   - Create account → create a new repository named \`[my-app-name]\` → set it to Private
   - Verify: ask me to share the repo URL

2. **Supabase** (supabase.com) — this is your database and user login system, no server needed.
   - Create account → create a new Project → name it \`[my-app-name]\`
   - Save these values somewhere safe (I'll need them later):
     - Project URL (looks like \`https://xxxxx.supabase.co\`)
     - Anon/public key (a long string starting with \`eyJ...\`)
   - Verify: ask me to confirm I have both values saved

3. **Vercel** (vercel.com) — this puts your app on the internet so anyone can visit it.
   - Create account → connect it to your GitHub account
   - Don't deploy anything yet
   - Verify: ask me to confirm Vercel shows my GitHub repos

4. **Railway** (railway.app) — this runs your Python backend on the internet, like Vercel does for your frontend.
   - Create account → connect it to your GitHub account
   - Don't deploy anything yet — we'll set this up after the frontend is working
   - Walk me through Railway's free trial and usage-based pricing so I know what to expect
   - Verify: ask me to confirm Railway shows my GitHub repos

5. **AI API Key** (either Anthropic or OpenAI, based on Project Blueprint)
   - Walk me through getting an API key
   - IMPORTANT: Tell me to NEVER put this key in my code directly. Explain .env files in one sentence.
   - **Set a spending cap immediately.** Walk me through setting a monthly budget limit in the API dashboard (Anthropic: Usage Limits page; OpenAI: Billing → Usage Limits). Start with $10/month — you can always raise it later, but you can't un-spend money.
   - **Start with a cheaper model for testing.** Use Claude Haiku or GPT-4o Mini while building and debugging — they're fast, cheap, and good enough to verify your app works. Switch to Claude Sonnet/Opus or GPT-4o only when you're polishing the final product. This keeps your bill under a few dollars during development.
   - Verify: ask me to confirm I have the key saved AND the spending cap set (not the key itself — never paste API keys in chat)

### Phase B: Local Development Tools
6. **Node.js** — the engine that runs your app on your computer during development.
   - Guide me to install Node.js LTS from nodejs.org
   - Verify: \`node --version\` should return v18+ or v20+

7. **Code Editor** — where you write code. Guide me to install VS Code or confirm I have Cursor/Antigravity.
   - If using Cursor or Antigravity, walk me through connecting it to my GitHub repo
   - Verify: I can open my (empty) project folder in the editor

8. **Git** — the system that tracks every change you make (like Track Changes in Word, but for code).
   - Check if already installed: \`git --version\`
   - If not, guide installation
   - Configure: \`git config --global user.name "My Name"\` and \`git config --global user.email "my@email.com"\`
   - Clone my repo: \`git clone [repo-url]\`
   - Verify: I can \`cd [my-app-name]\` and see an empty folder

### Phase C: Project Initialization
9. **Scaffold the React app:**
   \`\`\`
   npm create vite@latest . -- --template react
   npm install
   npm install tailwindcss @tailwindcss/vite
   \`\`\`
   - Walk me through each command — what it does in plain English
   - Set up Tailwind CSS configuration
   - Verify: \`npm run dev\` should open a page in my browser with the Vite logo

10. **Install core dependencies** (based on my Project Blueprint):
   \`\`\`
   npm install @supabase/supabase-js
   npm install [any AI SDK needed]
   \`\`\`
   - Create a \`.env.local\` file with my Supabase URL and keys
   - Create a \`.gitignore\` that excludes \`.env*\` files (CRITICAL — prevents leaking secrets)
   - Verify: the app still runs after installing packages

11. **First commit and push:**
    \`\`\`
    git add .
    git commit -m "initial project setup"
    git push origin main
    \`\`\`
    - Verify: ask me to refresh my GitHub repo page — I should see my files

12. **Deploy to Vercel:**
    - Walk me through connecting the GitHub repo to Vercel
    - Add environment variables in Vercel dashboard
    - Verify: give me the live URL and have me visit it

### COMPLETION CHECK
After all steps, print a status checklist:
- [ ] GitHub repo: [URL]
- [ ] Supabase project: [URL]
- [ ] Railway account: connected to GitHub
- [ ] Vercel deployment: [live URL]
- [ ] Local dev server: running at localhost:5173
- [ ] API keys: stored in .env.local (not committed to git)
- [ ] API spending cap: set to $10/month (or your chosen limit)
- [ ] AI model: using cheap model (Haiku/4o Mini) for development
- [ ] First commit: pushed to GitHub

If ANY item fails, help me fix it before celebrating.`,
  },
  {
    number: "03",
    title: "AI Operating System",
    subtitle: "The rules file that gives your AI coding assistant memory",
    when: "Day 1 — Save this file in your repo root",
    why: "This file turns your AI assistant into a senior engineering partner that knows your codebase, tracks your progress, and catches mistakes before they ship. You'll develop better app features faster.",
    prompt: `# AI OPERATING SYSTEM — [APP NAME]

## WHO I AM
I am an MBA student building my first real app. I am smart, motivated, and a fast learner, but I am a beginner at coding. I do not know programming conventions, common patterns, or debugging workflows unless you teach me.

## YOUR ROLE
You are my senior engineering partner. You write production-quality code, but you also:
- Explain what you're doing and why, in 1-2 sentences, before writing code
- Never skip steps or assume I'll "figure it out"
- Proactively flag when something could break later ("this works now, but when you add auth, we'll need to refactor this")
- Celebrate small wins — building is hard and momentum matters

## MY APP
[Paste your Project Blueprint from Prompt 1 here, or summarize it in 3-4 sentences]

## MANDATORY WORKFLOWS

### Before Writing Any Code
1. Read TRUTH.md and BACKLOG.md (described below) to understand current project state
2. State what you're about to build and which backlog item it addresses
3. Confirm the approach with me before writing more than 20 lines

### After Every Completed Feature
1. Update TRUTH.md with what changed
2. Update BACKLOG.md — mark completed items, add any new items discovered
3. Prompt me to commit: "Time to save your progress. Run: \`git add . && git commit -m '[descriptive message]' && git push\`"
4. Run a quick self-check: "Does the app still load without errors? Let's verify."

### When I Report a Bug
1. Ask me to paste the exact error message (browser console or terminal)
2. Identify the root cause before proposing a fix — say it in plain English
3. Fix the bug
4. Explain what caused it so I learn the pattern
5. Add to BACKLOG.md under "Resolved Bugs" with the lesson learned

### When I'm Stuck or Frustrated
1. Acknowledge it — "This is a genuinely tricky part, not a you problem"
2. Break the problem into the smallest possible next step
3. If I've been stuck for more than 10 minutes on the same issue, suggest a different approach entirely

## PROJECT FILES YOU MUST MAINTAIN

### TRUTH.md (Source of Truth)
This file describes the CURRENT state of the app — what exists right now, what works, what doesn't. Update it after every feature. Structure:

\`\`\`markdown
# [APP NAME] — Source of Truth
Last updated: [date]

## Current State
[2-3 sentences: what the app does right now if you ran it]

## Architecture
- Frontend: [framework, key libraries]
- Backend: [if applicable]
- Database: [tables that exist, what they store]
- AI: [how AI is integrated, which model, what it does]

## File Structure (key files only)
- src/App.jsx — [what it does]
- src/components/[name] — [what it does]
- [etc.]

## What Works
- [feature]: [status — working, partially working, needs testing]

## Known Issues
- [issue]: [severity — blocking, annoying, cosmetic]

## Environment
- Node version: [x]
- Key packages: [list with versions]
- Environment variables needed: [list names only, never values]
\`\`\`

### BACKLOG.md (What's Next)
This file is the prioritized task list. Structure:

\`\`\`markdown
# [APP NAME] — Backlog
Last updated: [date]

## Up Next (Current Sprint)
- [ ] [Task 1 — specific and completable in one session]
- [ ] [Task 2]
- [ ] [Task 3]

## Coming Soon
- [ ] [Task 4]
- [ ] [Task 5]

## Ideas (Not Yet Planned)
- [idea 1]
- [idea 2]

## Completed
- [x] [Task] — completed [date]
- [x] [Task] — completed [date]

## Resolved Bugs
- [Bug description] → [Root cause] → [Fix] — [date]
\`\`\`

## CODE STANDARDS

### General
- Write TypeScript if the project uses it; otherwise clean JavaScript with JSDoc comments
- Use descriptive variable names — \`userEmail\` not \`e\`, \`isLoading\` not \`flag\`
- Every component file starts with a 2-line comment: what it does, what props it takes
- No magic numbers — use named constants (\`const MAX_RETRIES = 3\`)
- Handle errors explicitly — never let them fail silently

### React Specific
- Functional components only, with hooks
- One component per file
- Use Tailwind for styling — no separate CSS files
- State management: useState/useContext for simple apps; avoid Redux unless truly needed

### Supabase Specific
- All database calls go through a \`lib/supabase.js\` helper file
- Always handle the \`{ data, error }\` response pattern
- Row Level Security (RLS): remind me to set this up before going live

### AI Integration
- API calls to AI models go through a dedicated service file (\`lib/ai.js\` or \`services/ai.py\`)
- Always show a loading state while AI is processing
- Set a reasonable timeout (30 seconds max)
- Handle rate limits and errors gracefully with user-friendly messages

## COMMIT HABITS
Prompt me to commit after every meaningful change. Suggest a commit message that follows this format:
- \`feat: add user login page\`
- \`fix: resolve crash when submitting empty form\`
- \`refactor: extract API calls into service layer\`
- \`docs: update TRUTH.md with auth flow\`
- \`style: improve mobile layout for dashboard\`

If I haven't committed in more than 30 minutes of work, gently remind me: "You've made good progress — let's save it with a commit before moving on."`,
  },
  {
    number: "04",
    title: "Architecture Scaffold",
    subtitle: "Generate a full working skeleton — frontend, database, and AI wired together",
    when: "Day 2 — After setup is complete",
    why: "You'll get a production-ready skeleton — routing, database, auth, and AI integration — all wired together and running in minutes. It's the equivalent of skipping straight to the interesting part of the build.",
    prompt: `You are a senior full-stack architect generating a complete starter scaffold for an MBA student's app. Read the Project Blueprint and TRUTH.md for context.

## MY PROJECT
[Paste your Project Blueprint here OR reference it: "See PROJECT_BLUEPRINT.md in the repo root"]

## WHAT I NEED YOU TO GENERATE

Create a complete, working scaffold with these layers. Every file should be real, functional code — not placeholder comments. The app should render and be clickable even if the features are stubbed out.

### Layer 1: Project Structure
Generate the folder structure and explain it in one paragraph:
\`\`\`
src/
  components/     # Reusable UI pieces (buttons, cards, modals)
  pages/          # Full screens/routes
  lib/            # Connections to external services (Supabase, AI)
  hooks/          # Custom React hooks (shared logic)
  utils/          # Helper functions
  styles/         # Global styles and Tailwind config
public/           # Static assets (images, favicon)
\`\`\`

### Layer 2: Design System Foundation
Create a minimal but polished design system. Generate:
- \`tailwind.config.js\` with a custom color palette (suggest 5 colors that work well together based on my app's vibe — professional, playful, data-heavy, etc.)
- A \`components/ui/\` folder with these foundational components:
  - \`Button.jsx\` — primary, secondary, and danger variants
  - \`Card.jsx\` — container with shadow and padding
  - \`Input.jsx\` — text input with label and error state
  - \`Loading.jsx\` — a clean loading spinner or skeleton
  - \`Layout.jsx\` — page wrapper with nav, main content area, and footer

Style requirements:
- Mobile-first responsive design
- Clean, professional look — not generic Bootstrap aesthetic
- Consistent spacing using Tailwind's spacing scale
- Accessible: proper contrast ratios, focus states, aria labels

### Layer 3: Routing & Pages
Set up React Router with pages matching my MVP screens from the Project Blueprint. Each page should:
- Have a real layout (not just "Page 1 placeholder")
- Show realistic-looking placeholder content (fake data that matches my domain)
- Include the navigation between pages
- Have loading and error states built in

### Layer 4: Supabase Integration
Generate:
- \`lib/supabase.js\` — Supabase client initialization, reading from .env
- SQL commands I should run in the Supabase SQL Editor to create my tables (based on the data model in my Blueprint)
- Include Row Level Security policies for each table
- \`lib/database.js\` — helper functions for each CRUD operation my app needs:
  - Comments above each function explaining what it does
  - Proper error handling with the \`{ data, error }\` pattern
  - TypeScript types or JSDoc types for the data shapes

If my app needs user authentication:
- Set up Supabase Auth with email/password
- Create a \`hooks/useAuth.js\` hook that provides \`user\`, \`signIn\`, \`signUp\`, \`signOut\`
- Create a \`components/ProtectedRoute.jsx\` that redirects to login if not authenticated
- Wire auth into the navigation (show Login vs. Dashboard based on auth state)

### Layer 5: AI Integration
Generate:
- \`lib/ai.js\` — a service file that handles AI API calls
  - Function to send a prompt and get a response
  - Loading state management
  - Error handling with user-friendly messages
  - Timeout handling (30 second max)
- A reusable \`hooks/useAI.js\` hook that components can use:
  \`\`\`javascript
  const { response, isLoading, error, sendPrompt } = useAI();
  \`\`\`
- Wire the AI hook into the relevant page from my Blueprint where AI adds value
- Include a well-crafted system prompt specific to my app's purpose

### Layer 6: Project Files
Generate initial versions of:
- \`TRUTH.md\` — documenting everything you just set up
- \`BACKLOG.md\` — first sprint of tasks to flesh out the scaffold into a real app
- \`README.md\` — what this app is, how to run it locally, how to deploy

## CRITICAL REQUIREMENTS
- Every file must be REAL, working code — no "TODO: implement this" comments
- Use fake/placeholder data where needed so the app looks alive
- The app must run with \`npm run dev\` without errors after you're done
- The app must deploy to Vercel without errors
- All Supabase operations must handle errors gracefully
- Console should be clean — no warnings or errors
- Code must be readable — a beginner should be able to follow it with the comments you provide

## OUTPUT FORMAT
Generate each file with its full path as a header. After all files, provide:
1. The SQL commands to run in Supabase (in order)
2. A "Getting Started" checklist — the 5 things I need to do to see this running
3. Updated TRUTH.md reflecting everything you just built
4. Updated BACKLOG.md with the next 5 tasks to flesh this out

Ready? Let's build. Start with the file structure overview, then generate each file.`,
  },
  {
    number: "05",
    title: "Ship & Rescue",
    subtitle: "Deploy, debug, improve, refactor, and hand off your finished product",
    when: "Ongoing — Keep this one handy",
    why: "Five modes you can call by name — deploy, debug, improve, refactor, handoff — so you always know exactly what to say when you're stuck, polishing, or ready to show your work to the world.",
    prompt: `You are a senior DevOps engineer and debugger helping an MBA student who is a beginner coder. I have a working (or partially working) app and I need help with one of the following. I'll tell you which one.

## MODES — I'll tell you which mode I need:

### MODE: DEPLOY
Help me deploy my app to production. Walk me through:
1. Pre-deploy checklist:
   - All environment variables set in Vercel dashboard?
   - \`.env\` files in \`.gitignore\`?
   - No hardcoded API keys in any file? (search for them)
   - Build succeeds locally? (\`npm run build\`)
   - No TypeScript/ESLint errors?
2. Deploy to Vercel via Git push
3. Verify the live site works — test each page, each feature
4. If anything fails, debug it using Vercel's function logs and build logs
5. Set up a custom domain (if I have one)

### MODE: DEBUG
Something is broken. Here's my process — walk me through it:
1. Ask me: "What did you expect to happen, and what actually happened?"
2. Ask me to paste the EXACT error message (from browser console, terminal, or Vercel logs)
3. Before proposing any fix, explain:
   - What the error message means in plain English
   - Where the error is coming from (which file, which line, which operation)
   - Why it's happening (the root cause, not just the symptom)
4. Propose a fix. If there are multiple options, explain the tradeoffs.
5. After fixing, verify:
   - Does the original feature work now?
   - Did the fix break anything else?
   - Should we add error handling to prevent this class of bug in the future?
6. Log the bug in BACKLOG.md under "Resolved Bugs" with the root cause and lesson learned

Common beginner bugs to check proactively:
- CORS errors (backend and frontend on different domains)
- Environment variables not available (missing VITE_ prefix for client-side vars, not set in Vercel)
- Supabase RLS blocking queries (table-level security policies)
- API keys exposed in client-side code
- Async/await mistakes (not awaiting a promise, missing error handling)
- React infinite re-render loops (useEffect with missing or wrong dependencies)
- Build failures from import errors (works in dev, breaks in production)

### MODE: IMPROVE
My app works but I want to make it better. Help me with:
1. **Performance audit:**
   - Are there unnecessary re-renders?
   - Are API calls efficient (not fetching too much data)?
   - Are images optimized?
   - Is the bundle size reasonable?
2. **UX audit:**
   - Does every action have visual feedback (loading states, success/error messages)?
   - Can a new user figure out what to do without instructions?
   - Does it work on mobile?
   - Are there accessibility issues (contrast, keyboard navigation, screen readers)?
3. **Code quality audit:**
   - Are there files over 200 lines that should be split?
   - Is there repeated code that should be extracted?
   - Are error messages user-friendly or raw technical errors?
   - Is the code well-commented enough that I could understand it next month?
4. **Security check:**
   - API keys properly hidden?
   - Supabase RLS enabled on all tables?
   - User input sanitized?
   - No sensitive data in URL parameters?

After the audit, produce a prioritized list of improvements ranked by impact (1-5) and effort (1-5). Start with high-impact, low-effort items.

### MODE: REFACTOR
The codebase has gotten messy and I need to reorganize without breaking anything. Process:
1. Read TRUTH.md for current architecture understanding
2. Identify the top 3 structural issues (God components, circular dependencies, inconsistent patterns)
3. Propose a refactoring plan — explain each change and why
4. Execute changes ONE FILE AT A TIME with testing between each change
5. After each change, verify the app still works
6. Update TRUTH.md with the new architecture
7. Commit after each successful refactor step

### MODE: HANDOFF
I need to present this app or hand it to someone else. Help me:
1. Write a clear README.md with:
   - What the app does (with a screenshot or demo GIF)
   - How to run it locally (step by step)
   - How to deploy it
   - Architecture overview (which tech does what)
   - Environment variables needed (names only, never values)
2. Add inline code comments to any complex logic
3. Create a 2-minute demo script: "Here's what I'd click and say to show this app"
4. Ensure the live URL works and looks good

## REGARDLESS OF MODE, ALWAYS:
- Read TRUTH.md and BACKLOG.md first
- Update both files after making changes
- Prompt me to commit after every meaningful change
- Explain what you're doing and why — I want to learn, not just have it fixed
- If you spot something unrelated that needs fixing, add it to BACKLOG.md rather than fixing it now (stay focused on the current mode)`,
  },
];

const PRO_TIPS = [
  { tip: "Start every session with context. Paste TRUTH.md if the AI doesn't auto-read it." },
  { tip: "One feature per session. Pick one backlog item, build it, commit it, update the docs." },
  { tip: "Commit constantly. If your code works, save it. Commits are save points in a video game." },
  { tip: "When something breaks, don't delete code. Comment it out and paste the error." },
  { tip: "The AI is wrong sometimes. If a suggestion doesn't work, say so — it will course-correct." },
];

/* ── DESIGN SYSTEM TOKENS ── */
const V = {
  ink: "#1A1D21", charcoal: "#2C2F36", graphite: "#4A4E57", slate: "#6E7380",
  pewter: "#9DA2AD", silver: "#C5C9D1", mist: "#E8EAEF", cloud: "#F3F4F7",
  snow: "#FAFBFC", white: "#FFFFFF",
  amber: "#C47E17", amberLight: "#D9A84E", amberDark: "#9A6210", amberPale: "#F5ECD8",
  steel: "#93B1C2", steelLight: "#B5CCD8", steelDark: "#5E8499",
  coolGray: "#DFE3E6", coolGrayDark: "#C8CDD2",
  navy: "#1B2A4A", navyMid: "#2D4066", navyLight: "#4A6A9B",
  fontDisplay: "'Bodoni Moda', 'Didot', 'Georgia', serif",
  fontEditorial: "'Cormorant', 'Georgia', serif",
  fontHeading: "'Josefin Sans', 'Helvetica Neue', sans-serif",
  fontBody: "'DM Sans', system-ui, sans-serif",
};

/* ── COMPONENTS ── */

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  return (
    <button onClick={handleCopy} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontFamily: V.fontHeading, fontSize: 11, fontWeight: 700, letterSpacing: 3,
      textTransform: "uppercase", color: copied ? V.white : V.white,
      background: copied ? "#16a34a" : V.amber,
      border: "none", cursor: "pointer",
      transition: "all 0.25s ease", padding: "12px 24px",
      borderRadius: 3,
    }}>
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          Copied
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy Prompt
        </>
      )}
    </button>
  );
}

function PromptCard({ prompt, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div style={{
      background: isOpen ? V.white : "transparent",
      borderBottom: `1px solid ${V.mist}`,
      transition: "background 0.3s ease",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", display: "grid",
        gridTemplateColumns: "60px 1fr 36px",
        gap: 24, alignItems: "start",
        padding: "32px 0", border: "none", background: "none",
        cursor: "pointer", textAlign: "left",
      }}>
        <div style={{
          fontFamily: V.fontDisplay, fontSize: 48, fontWeight: 400,
          color: isOpen ? V.amber : "#64737B", lineHeight: 1,
          transition: "color 0.3s ease",
        }}>
          {prompt.number}
        </div>
        <div>
          <div style={{
            fontFamily: V.fontHeading, fontSize: 13, fontWeight: 700,
            letterSpacing: 3, textTransform: "uppercase",
            color: V.charcoal, marginBottom: 6,
          }}>
            {prompt.title}
          </div>
          <div style={{
            fontFamily: V.fontEditorial, fontSize: 22, fontWeight: 400,
            fontStyle: "italic", lineHeight: 1.35, color: V.graphite,
          }}>
            {prompt.subtitle}
          </div>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: V.ink, border: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: V.amberLight, transition: "all 0.3s ease",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          marginTop: 4, flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>

      <div style={{
        height, overflow: "hidden",
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div ref={contentRef} style={{ paddingBottom: 40, paddingLeft: 84 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 16, marginBottom: 24 }}>
            <div style={{
              padding: "16px 20px", background: V.amberPale,
              borderRadius: 4, borderLeft: `3px solid ${V.amber}`,
            }}>
              <div style={{
                fontFamily: V.fontHeading, fontSize: 10, fontWeight: 700,
                letterSpacing: 3, textTransform: "uppercase",
                color: V.amberDark, marginBottom: 6,
              }}>When</div>
              <div style={{
                fontFamily: V.fontBody, fontSize: 14, color: V.charcoal, lineHeight: 1.6,
              }}>{prompt.when}</div>
            </div>
            <div style={{
              padding: "16px 20px", background: V.cloud, borderRadius: 4,
            }}>
              <div style={{
                fontFamily: V.fontHeading, fontSize: 10, fontWeight: 700,
                letterSpacing: 3, textTransform: "uppercase",
                color: V.pewter, marginBottom: 6,
              }}>Why It Matters</div>
              <div style={{
                fontFamily: V.fontBody, fontSize: 14, color: V.graphite, lineHeight: 1.6,
              }}>{prompt.why}</div>
            </div>
          </div>

          <div style={{
            background: V.ink, borderRadius: 8, padding: 28,
            maxHeight: 400, overflowY: "auto", marginBottom: 20,
            border: `1px solid ${V.charcoal}`,
          }}>
            <pre style={{
              fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
              fontSize: 12.5, lineHeight: 1.7,
              color: V.steel, whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0,
            }}>
              {prompt.prompt}
            </pre>
          </div>

          <CopyButton text={prompt.prompt} />
        </div>
      </div>
    </div>
  );
}

/* ── MAIN APP ── */

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);

  const scrollToPrompts = () => {
    document.getElementById("prompts-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400;1,9..40,500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${V.silver}; border-radius: 3px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ background: V.snow, minHeight: "100vh" }}>

        {/* ═══ FIXED HOME NAV ═══ */}
        <Link to="/" title="Home" style={{
          position: "fixed", bottom: 12, right: 24, zIndex: 200,
          width: 36, height: 36, borderRadius: "50%",
          border: "1px solid #0891B2",
          background: "rgba(1,107,131,0.4)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none", color: "#36B5CE",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(1,107,131,0.7)"; e.currentTarget.style.borderColor = "#36B5CE"; e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(1,107,131,0.4)"; e.currentTarget.style.borderColor = "#0891B2"; e.currentTarget.style.color = "#36B5CE"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </Link>

        {/* ═══════════════ COVER ═══════════════ */}
        <div style={{
          background: V.navy, color: V.cloud,
          padding: "120px 48px 96px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.035,
            backgroundImage: `linear-gradient(${V.steel} 1px, transparent 1px), linear-gradient(90deg, ${V.steel} 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
            <div style={{
              fontFamily: V.fontHeading, fontSize: 11, fontWeight: 700,
              letterSpacing: 4, textTransform: "uppercase",
              color: V.amber, marginBottom: 28,
              animation: "fadeUp 0.6s ease both",
            }}>
              From Idea to Deployed Product
            </div>

            <h1 style={{
              fontFamily: V.fontDisplay,
              fontSize: "clamp(48px, 8vw, 80px)",
              fontWeight: 400, lineHeight: 1.05, color: V.white,
              animation: "fadeUp 0.6s ease 0.1s both",
            }}>
              Build Your <em style={{ fontStyle: "italic" }}>First</em><br />AI App
            </h1>

            <div style={{
              width: 40, height: 1, background: V.amber,
              margin: "28px auto",
              animation: "fadeUp 0.6s ease 0.2s both",
            }} />

            <p style={{
              fontFamily: V.fontEditorial,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 400, fontStyle: "italic",
              color: "#D8DDDF", maxWidth: 520, margin: "0 auto",
              lineHeight: 1.4,
              animation: "fadeUp 0.6s ease 0.3s both",
            }}>
              Five prompts that take MBA students from blank screen to live, working application
            </p>

            <div style={{ marginTop: 44, animation: "fadeUp 0.6s ease 0.4s both" }}>
              <button onClick={scrollToPrompts} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: V.fontHeading, fontSize: 11, fontWeight: 700, letterSpacing: 3,
                textTransform: "uppercase", color: V.white,
                background: V.amber, border: "none", cursor: "pointer",
                transition: "all 0.25s ease", padding: "12px 24px",
                borderRadius: 3,
              }}>
                View the System
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════ STAT BAR ═══════════════ */}
        <div style={{
          background: V.ink, color: V.cloud,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        }}>
          {[
            { value: "5", label: "Prompts" },
            { value: "0", label: "Lines of Code to Start" },
            { value: "∞", label: "What You Can Build" },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "32px 24px", textAlign: "center",
              borderRight: i < 2 ? `1px solid ${V.charcoal}` : "none",
            }}>
              <div style={{
                fontFamily: V.fontDisplay, fontSize: 34, fontWeight: 400,
                color: V.white, lineHeight: 1, marginBottom: 6,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: V.fontHeading, fontSize: 10, fontWeight: 700,
                letterSpacing: 3, textTransform: "uppercase", color: V.steel,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ═══════════════ HOW IT WORKS ═══════════════ */}
        <div style={{ background: V.white, padding: "96px 48px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "start" }}>
              <div>
                <div style={{
                  fontFamily: V.fontHeading, fontSize: 11, fontWeight: 700,
                  letterSpacing: 4, textTransform: "uppercase",
                  color: V.amber, marginBottom: 12,
                }}>The System</div>
                <h2 style={{
                  fontFamily: V.fontDisplay,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 400, lineHeight: 1.15, marginBottom: 24, color: V.ink,
                }}>
                  How <em style={{ fontStyle: "italic", color: V.amber }}>It</em> Works
                </h2>
                <p style={{
                  fontFamily: V.fontBody, fontSize: 15, lineHeight: 1.75,
                  color: V.graphite, maxWidth: 460,
                }}>
                  Each prompt is a self-contained system that handles one phase of the build. Run them in order. Paste each one into your AI coding assistant and follow its lead. The AI does the heavy lifting; you make the decisions.
                </p>
                <div style={{ marginTop: 24 }}>
                  <div style={{
                    fontFamily: V.fontHeading, fontSize: 10, fontWeight: 700,
                    letterSpacing: 3, textTransform: "uppercase",
                    color: V.pewter, marginBottom: 12,
                  }}>Compatible With</div>
                  <div style={{
                    fontFamily: V.fontHeading, fontSize: 11, letterSpacing: 3,
                    textTransform: "uppercase", color: V.slate,
                    display: "flex", flexWrap: "nowrap", alignItems: "center",
                  }}>
                    {["Claude", "Cursor", "Antigravity", "Codex", "Windsurf"].map((tool, i) => (
                      <span key={i} style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ padding: "0 12px", paddingLeft: i === 0 ? 0 : 12 }}>{tool}</span>
                        {i < 4 && <span style={{ color: V.silver }}>/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nav sidebar */}
              <div style={{
                background: V.cloud, borderRadius: 8, padding: 32,
              }}>
                <div style={{
                  fontFamily: V.fontHeading, fontSize: 13, fontWeight: 700,
                  letterSpacing: 3, textTransform: "uppercase",
                  color: V.charcoal, marginBottom: 20,
                }}>Build Sequence</div>
                {PROMPTS.map((p, i) => (
                  <div key={i}
                    onClick={() => { setOpenIndex(i); setTimeout(scrollToPrompts, 50); }}
                    style={{
                      display: "flex", justifyContent: "space-between",
                      alignItems: "center", padding: "12px 0",
                      paddingLeft: hoveredNav === i ? 12 : 0,
                      borderBottom: i < 4 ? `1px solid ${V.mist}` : "none",
                      cursor: "pointer", transition: "padding-left 0.25s ease",
                    }}
                    onMouseEnter={() => setHoveredNav(i)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        fontFamily: V.fontDisplay, fontSize: 18,
                        color: hoveredNav === i ? V.amber : "#64737B",
                        transition: "color 0.2s ease", minWidth: 24,
                      }}>{p.number}</span>
                      <span style={{
                        fontFamily: V.fontHeading, fontSize: 12, fontWeight: 500,
                        letterSpacing: 2, textTransform: "uppercase", color: V.charcoal,
                      }}>{p.title}</span>
                    </div>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: V.navy, display: "inline-flex",
                      alignItems: "center", justifyContent: "center",
                      fontSize: 12, color: "#E8B84B", flexShrink: 0,
                      transition: "transform 0.25s ease",
                      transform: hoveredNav === i ? "translateX(4px)" : "none",
                    }}>→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════ PROMPTS ═══════════════ */}
        <div id="prompts-section" style={{ background: V.snow, padding: "96px 48px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              fontFamily: V.fontHeading, fontSize: 11, fontWeight: 700,
              letterSpacing: 4, textTransform: "uppercase",
              color: V.amber, marginBottom: 12,
            }}>The Prompts</div>
            <h2 style={{
              fontFamily: V.fontDisplay,
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 400, lineHeight: 1.15, marginBottom: 48, color: V.ink,
            }}>
              Five Steps <em style={{ fontStyle: "italic", color: V.amber }}>to</em> Launch
            </h2>

            <div>
              {PROMPTS.map((prompt, i) => (
                <PromptCard
                  key={i}
                  index={i}
                  prompt={prompt}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════ PRO TIPS ═══════════════ */}
        <div style={{ background: V.navy, padding: "96px 48px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              fontFamily: V.fontHeading, fontSize: 11, fontWeight: 700,
              letterSpacing: 4, textTransform: "uppercase",
              color: V.amber, marginBottom: 12,
            }}>Field Notes</div>
            <h2 style={{
              fontFamily: V.fontDisplay,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400, lineHeight: 1.15, marginBottom: 48, color: V.cloud,
            }}>
              Lessons <em style={{ fontStyle: "italic", color: V.amber }}>from</em> the Build
            </h2>

            <div>
              {PRO_TIPS.map((t, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "60px 1fr",
                  gap: 24, alignItems: "start",
                  padding: "28px 0",
                  borderBottom: i < PRO_TIPS.length - 1 ? "1px solid rgba(147,177,194,0.12)" : "none",
                }}>
                  <div style={{
                    fontFamily: V.fontDisplay, fontSize: 42, fontWeight: 400,
                    color: V.navyLight, lineHeight: 1,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{
                    fontFamily: V.fontBody, fontSize: 15, lineHeight: 1.75,
                    color: "#D8DDDF", paddingTop: 8,
                  }}>
                    {t.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <div style={{ background: V.ink, padding: "48px", textAlign: "center" }}>
          <div style={{
            fontFamily: V.fontHeading, fontSize: 10, letterSpacing: 3,
            textTransform: "uppercase", color: V.slate,
            display: "flex", justifyContent: "center", alignItems: "center",
            flexWrap: "wrap",
          }}>
            {["AI App Builder", "5 Prompts", "Built for MBA Students", "2026"].map((item, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center" }}>
                <span style={{ padding: "0 16px" }}>{item}</span>
                {i < 3 && <span style={{ color: V.graphite }}>/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}