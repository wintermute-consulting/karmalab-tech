const REEL_SRC = "https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_25fps.mp4";
const LOGO_SRC = "uploads/chrome_logo_transparent.png";

function App() {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background video — faded + blurry */}
      <video autoPlay loop muted playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.18,
          filter: 'blur(14px) saturate(0.6)',
        }}
        src={REEL_SRC}
      />
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.9) 100%)',
        pointerEvents: 'none',
      }} />
      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.35'/></svg>`
        )}")`,
        mixBlendMode: 'overlay',
        opacity: 0.22,
        pointerEvents: 'none',
      }} />

      {/* Contact us — top right */}
      <div style={{
        position: 'absolute', top: 24, right: 'clamp(20px, 3vw, 36px)',
        zIndex: 10,
      }}>
        <KLButton size="sm" accent="pink" onClick={() => setContactOpen(true)}>
          Contact us
        </KLButton>
      </div>

      {/* Hero content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        alignItems: 'center',
        padding: '0 clamp(24px, 6vw, 96px)',
        gap: 'clamp(24px, 6vw, 80px)',
      }}>
        {/* Left: chrome logo */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 'min(560px, 46vw)',
            aspectRatio: '1 / 1',
            animation: 'kl-breathe 9s ease-in-out infinite',
          }}>
            <img
              src={LOGO_SRC}
              alt="KarmaLab"
              style={{
                width: '100%', height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Right: tagline */}
        <div style={{
          maxWidth: 620,
          display: 'flex', flexDirection: 'column', gap: 48,
        }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            fontSize: '54px',
            lineHeight: 1.15,
            letterSpacing: '-2px',
            color: 'var(--kl-bone)',
            margin: 0,
          }}>
            Going live<br />
            <span style={{ color: 'var(--kl-pink)' }}>May 15</span>
          </h1>
        </div>
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <React.Fragment>
          <div onClick={() => setContactOpen(false)} style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,.85)',
            backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
            zIndex: 90,
          }} />
          <div style={{
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 91,
            width: 'min(560px, 92vw)',
            background: 'var(--kl-ink)',
            border: '1px solid var(--border-2)',
            borderRadius: 28,
            padding: '44px 44px 40px',
            boxShadow: '0 40px 120px rgba(0,0,0,.8), inset 0 1px 0 rgba(255,255,255,.06)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                color: 'var(--kl-bone)',
              }}>
                Say hi.
              </div>
              <KLIconButton onClick={() => setContactOpen(false)} accent="pink" size={40} title="Close">
                <IconClose size={18} stroke={2.2} />
              </KLIconButton>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { label: 'Email', value: 'start@karmalab.tech', href: 'mailto:start@karmalab.tech' },
                { label: 'Instagram', value: '@karmalab.tech', href: 'https://instagram.com/karmalab.tech' },
              ].map((c, i, arr) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '22px 0',
                    borderTop: '1px solid var(--border-1)',
                    borderBottom: i === arr.length - 1 ? '1px solid var(--border-1)' : 'none',
                    textDecoration: 'none',
                    color: 'var(--kl-lime)',
                    transition: 'color 180ms ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--kl-pink)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--kl-lime)'; }}
                >
                  <KLMeta style={{ color: 'var(--kl-ash)' }}>{c.label}</KLMeta>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 300,
                    fontSize: 22,
                    letterSpacing: '-0.02em',
                  }}>{c.value}</div>
                  <IconArrowUpRight size={16} stroke={1.75} style={{ opacity: 0.5 }} />
                </a>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
