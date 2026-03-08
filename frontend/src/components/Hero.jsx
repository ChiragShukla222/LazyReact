export default function Hero() {
  return (
    <section className="hero" id="visualize">
      <div className="hero-content">
        <div className="hero-tag fade-up delay-0">⚛ Interactive React Learning Platform</div>
        <h1 className="hero-title">
          <span className="hero-title-line">Learn React Through</span>
          <span className="hero-title-line hero-title-gradient">Live Visualizations</span>
        </h1>
        <p className="hero-subtitle">
          Explore React&apos;s core concepts — from JSX to hooks, state management to performance — through animated 3D
          visualizations and interactive code playgrounds.
        </p>
        <div className="hero-ctas">
          <button className="btn btn-primary fade-up delay-1">Explore Topics →</button>
          <button className="btn btn-outline fade-up delay-2">See Visualizations</button>
        </div>
      </div>

      <div className="hero-atom">
        <svg width="320" height="320" viewBox="0 0 320 320" className="atom-svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g transform="translate(160 160)" filter="url(#glow)">
            <ellipse rx="120" ry="40" stroke="#00F5FF" fill="none" className="orbit orbit1" />
            <ellipse rx="120" ry="40" stroke="#7C3AED" fill="none" transform="rotate(60)" className="orbit orbit2" />
            <ellipse
              rx="120"
              ry="40"
              stroke="#EC4899"
              fill="none"
              transform="rotate(-60)"
              className="orbit orbit3"
            />
            <circle r="22" fill="rgba(0,245,255,0.35)" />
            <circle r="14" fill="rgba(14,165,233,0.6)" />
            <circle r="8" fill="#00F5FF" />
          </g>
        </svg>
      </div>
    </section>
  );
}

