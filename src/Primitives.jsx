const KLEyebrow = ({ children, muted, style }) => (
  <div
    className="text-[12px] tracking-[0.14em] uppercase font-medium"
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      color: muted ? 'var(--kl-ash)' : 'var(--kl-pink)',
      ...style,
    }}
  >{children}</div>
);

const KLButton = ({ children, variant = 'primary', size = 'md', onClick, accent = 'lime', style, ...rest }) => {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const sizes = {
    sm: { pad: '8px 16px', fs: 13 },
    md: { pad: '12px 22px', fs: 15 },
    lg: { pad: '16px 30px', fs: 17 },
  };
  const s = sizes[size];
  const a = accent === 'pink'
    ? { base: '#FB48C4', hot: '#FD7BD8', deep: '#C12E9A', glow: 'rgba(251, 72, 196,.5)' }
    : { base: '#85FF00', hot: '#AFFF56', deep: '#5BB300', glow: 'rgba(133,255,0,.5)' };
  const dynamicStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: s.fs,
    padding: s.pad,
    transition: 'all 180ms cubic-bezier(.22,1,.36,1)',
    transform: p ? 'scale(.98)' : 'scale(1)',
    ...(variant === 'primary' ? {
      background: h ? a.hot : 'transparent',
      borderColor: h ? a.hot : a.base,
      color: p ? a.deep : (h ? '#000' : a.base),
      boxShadow: h ? `0 0 0 1px ${a.glow}, 0 0 28px ${a.glow}` : 'none',
    } : variant === 'ghost' ? {
      background: 'transparent',
      color: h ? '#fff' : 'var(--kl-bone)',
      borderColor: 'rgba(255,255,255,.14)',
    } : {
      background: 'transparent',
      color: h ? a.hot : a.base,
      padding: `${s.pad.split(' ')[0]} 8px`,
    }),
    ...style,
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => { setH(false); setP(false); }}
      onMouseDown={() => setP(true)}
      onMouseUp={() => setP(false)}
      className="font-medium rounded-full cursor-pointer border-2 border-transparent inline-flex items-center gap-2 no-underline tracking-[-0.005em] whitespace-nowrap"
      style={dynamicStyle}
      {...rest}
    >
      {children}
    </button>
  );
};

const KLIconButton = ({ children, onClick, accent = 'pink', size = 44, title, style }) => {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const a = accent === 'lime'
    ? { base: '#85FF00', hot: '#AFFF56', glow: 'rgba(133,255,0,.45)' }
    : { base: '#FB48C4', hot: '#FD7BD8', glow: 'rgba(251, 72, 196,.45)' };
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => { setH(false); setP(false); }}
      onMouseDown={() => setP(true)}
      onMouseUp={() => setP(false)}
      className="rounded-full cursor-pointer inline-flex items-center justify-center"
      style={{
        width: size, height: size,
        background: h ? 'rgba(255,255,255,0.04)' : 'transparent',
        border: `2px solid ${h ? a.hot : a.base}`,
        color: h ? a.hot : a.base,
        transition: 'all 180ms cubic-bezier(.22,1,.36,1)',
        transform: p ? 'scale(.94)' : 'scale(1)',
        boxShadow: h ? `0 0 24px ${a.glow}` : 'none',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        ...style,
      }}
    >
      {children}
    </button>
  );
};

const KLMeta = ({ children, color, style }) => (
  <span
    className="text-[11px] tracking-[0.12em] uppercase"
    style={{ fontFamily: "'JetBrains Mono', monospace", color: color || 'var(--kl-ash)', ...style }}
  >{children}</span>
);

const KLSectionNumber = ({ n, label, accent = 'pink' }) => (
  <div
    className="flex gap-5 items-baseline font-light tracking-[-0.025em]"
    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 3vw, 44px)' }}
  >
    <span
      className="tracking-[0.14em] uppercase self-center"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(12px, 1.1vw, 16px)',
        color: accent === 'lime' ? 'var(--kl-lime)' : 'var(--kl-pink)',
      }}
    >§ {n}</span>
    <span className="text-[var(--kl-bone)]">{label}</span>
  </div>
);

Object.assign(window, { KLEyebrow, KLButton, KLIconButton, KLMeta, KLSectionNumber });
