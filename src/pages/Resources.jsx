import { Link } from 'react-router-dom'

export default function Resources() {
  return (
    <div style={{
      background: '#0F1923',
      color: '#E9EDF1',
      fontFamily: "'Poppins', system-ui, sans-serif",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Nav */}
      <nav style={{
        padding: '24px 48px',
        borderBottom: '1px solid #2E3B48',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link to="/" style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
          fontWeight: 600,
          color: '#FF8F50',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 48px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: '#FF8F50',
          marginBottom: 24,
        }}>
          Coming Soon
        </div>
        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 900,
          lineHeight: 1.1,
          color: '#FFFFFF',
          marginBottom: 16,
        }}>
          Resources
        </h1>
        <p style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontStyle: 'italic',
          color: '#B3BEC9',
          maxWidth: 480,
          lineHeight: 1.5,
        }}>
          Copy-paste prompts, reading list, research citations, and tool recommendations — organized in one place.
        </p>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '48px',
        borderTop: '1px solid #2E3B48',
      }}>
        <p style={{
          fontFamily: "'Poppins', system-ui, sans-serif",
          fontSize: 12,
          fontWeight: 300,
          color: '#6B7A8A',
          letterSpacing: 1,
        }}>
          AI-Powered App Building · Spring 2026
        </p>
      </footer>
    </div>
  )
}
