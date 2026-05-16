const REEL_SRC = "https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_25fps.mp4";
const LOGO_SRC = "uploads/chrome_logo_transparent.png";

function App() {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Contact us — top right */}
      <div className="absolute top-6 z-10" style={{ right: 'clamp(20px, 3vw, 36px)' }}>
        <KLButton size="sm" accent="pink" onClick={() => setContactOpen(true)}>
          Contact us
        </KLButton>
      </div>

      {/* Hero content */}
      <div
        className="relative z-[2] h-full flex flex-col items-center justify-center md:grid md:items-center"
        style={{
          gridTemplateColumns: '1.1fr 1fr',
          padding: '0 clamp(24px, 6vw, 96px)',
          gap: 'clamp(24px, 6vw, 80px)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center">
          <div
            className="aspect-square"
            style={{ animation: 'kl-breathe 9s ease-in-out infinite' }}
            className="w-[88vw] md:w-[min(560px,min(46vw,60vh))]"
          >
            <img
              src={LOGO_SRC}
              alt="KarmaLab"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-[620px] flex flex-col gap-12 items-center text-center md:items-start md:text-left">
          <h1
            className="font-light text-[clamp(36px,8vw,54px)] leading-[1.15] tracking-[-2px] text-[var(--kl-bone)] m-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Going live<br />
            <span className="text-[var(--kl-pink)]">real soon</span>
          </h1>
        </div>
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <React.Fragment>
          <div
            onClick={() => setContactOpen(false)}
            className="fixed inset-0 z-[90] backdrop-blur-[14px]"
            style={{ background: 'rgba(0,0,0,.85)', WebkitBackdropFilter: 'blur(14px)' }}
          />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[91] rounded-[28px]"
            style={{
              width: 'min(560px, 92vw)',
              background: 'var(--kl-ink)',
              border: '1px solid var(--border-2)',
              padding: '44px 44px 40px',
              boxShadow: '0 40px 120px rgba(0,0,0,.8), inset 0 1px 0 rgba(255,255,255,.06)',
            }}
          >
            <div className="flex justify-between items-start mb-12">
              <div
                className="font-light leading-none tracking-[-0.04em] text-[var(--kl-bone)]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(36px, 5vw, 56px)' }}
              >
                Say hi.
              </div>
              <KLIconButton onClick={() => setContactOpen(false)} accent="pink" size={40} title="Close">
                <IconClose size={18} stroke={2.2} />
              </KLIconButton>
            </div>

            <div className="flex flex-col">
              {[
                { label: 'Email', value: 'start@karmalab.tech', href: 'mailto:start@karmalab.tech' },
                { label: 'Instagram', value: '@karmalab.tech', href: 'https://instagram.com/karmalab.tech' },
              ].map((c, i, arr) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex justify-between items-center py-[22px] no-underline cursor-pointer"
                  style={{
                    borderTop: '1px solid var(--border-1)',
                    borderBottom: i === arr.length - 1 ? '1px solid var(--border-1)' : 'none',
                    color: 'var(--kl-lime)',
                    transition: 'color 180ms ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--kl-pink)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--kl-lime)'; }}
                >
                  <KLMeta style={{ color: 'var(--kl-ash)' }}>{c.label}</KLMeta>
                  <div
                    className="font-light text-[22px] tracking-[-0.02em]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >{c.value}</div>
                  <IconArrowUpRight size={16} stroke={1.75} className="opacity-50" />
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
