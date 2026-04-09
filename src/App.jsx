import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <div className="prog"></div>

      <div className="page">
        <div className="label">WHAT YOU'LL WALK AWAY WITH</div>
        <h1 className="headline">
          Skills that compound.<br />
          Achieve goals faster and produce<br />
          <em>higher-quality work.</em>
        </h1>

        <div className="card-grid">

          {/* 01 — Optimize Your LLM Use */}
          <a className="card" href="/presentation.html">
            <div className="card-number">01</div>
            <div className="card-title">Get expert-level output from Claude or ChatGPT</div>
            <div className="card-desc">The four habits that move you from average results to the top 10% of AI users — starting today.</div>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </a>

          {/* 02 — Launch Your First App */}
          <Link className="card" to="/prompts">
            <div className="card-number">02</div>
            <div className="card-title">Use AI to build an app that gives you a competitive edge</div>
            <div className="card-desc">Five copy-paste prompts that take you from idea to a live, deployed product — no coding experience required.</div>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </Link>

          {/* 03 — Design Anything */}
          <a className="card" href="/presentation.html">
            <div className="card-number">03</div>
            <div className="card-title">Develop an advanced design system</div>
            <div className="card-desc">Build polished visual systems, component libraries, and brand-consistent interfaces — the same design thinking behind professional products.</div>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </a>

          {/* 04 — Resources */}
          <Link className="card" to="/resources">
            <div className="card-number">04</div>
            <div className="card-title">Learn faster and more affordably</div>
            <div className="card-desc">Copy-paste prompts, research citations, tool recommendations, and curated resources — everything you need, organized in one place.</div>
            <span className="card-cta">Explore <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </Link>

        </div>
      </div>

      <div className="footer">
        <div className="footer-tagline">By the end of today, you'll have all four.</div>
        <div className="footer-mark">PRIME AI Class · Spring 2026</div>
      </div>
    </>
  )
}
