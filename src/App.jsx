import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <header className="hero">
        <div className="hero-label">PRIME AI Class · Spring 2026</div>
        <h1 className="hero-title">Build With <em>AI</em></h1>
        <div className="hero-divider"></div>
        <p className="hero-sub">Four modules. Zero coding experience required.</p>
      </header>

      {/* ═══ CARDS ═══ */}
      <main className="cards-section">
        <div className="cards-grid">

          {/* Card 1 — Optimize Your LLM Use */}
          <a className="card" href="/presentation.html">
            <span className="card-number">01</span>
            <div className="card-icon card-icon--coral">
              <svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/></svg>
            </div>
            <h2 className="card-title">Optimize Your LLM Use</h2>
            <p className="card-desc">Get dramatically better answers from AI tools you already use — prompting techniques, context management, and output formatting that separate power users from everyone else.</p>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </a>

          {/* Card 2 — Launch Your First App */}
          <Link className="card" to="/prompts">
            <span className="card-number">02</span>
            <div className="card-icon card-icon--teal">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h2 className="card-title">Launch Your First App</h2>
            <p className="card-desc">Go from idea to a deployed, working application using a five-prompt system and an AI-powered code editor. No coding background needed — just a clear vision and the right workflow.</p>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </Link>

          {/* Card 3 — Design Anything */}
          <a className="card" href="/presentation.html">
            <span className="card-number">03</span>
            <div className="card-icon card-icon--navy">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <h2 className="card-title">Design Anything</h2>
            <p className="card-desc">Build polished interfaces, presentations, and visual systems using AI as your design partner. The same design-system thinking that powers professional products — now accessible to everyone.</p>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </a>

          {/* Card 4 — Resources */}
          <Link className="card" to="/resources">
            <span className="card-number">04</span>
            <div className="card-icon card-icon--pewter">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
            </div>
            <h2 className="card-title">Resources</h2>
            <p className="card-desc">Copy-paste prompts, reading list, research citations, and tool recommendations — everything referenced in the course, organized in one place.</p>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </Link>

        </div>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <p className="footer-text">AI-Powered App Building · Spring 2026 · <a href="#">Course Syllabus</a></p>
      </footer>
    </>
  )
}
