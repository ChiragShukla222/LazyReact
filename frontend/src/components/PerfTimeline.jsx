import { useEffect, useMemo, useState } from 'react';

function Row({ name, ms, widthPct, color }) {
  return (
    <div className="perf-row">
      <div className="perf-label">{name}</div>
      <div className="perf-bar">
        <div className="perf-bar-fill" style={{ width: widthPct, background: color }} />
      </div>
      <div className="perf-ms">{ms}ms</div>
    </div>
  );
}

export default function PerfTimeline() {
  const rows = useMemo(
    () => [
      { name: 'App', before: 52, after: 52 },
      { name: 'Header', before: 28, after: 2 },
      { name: 'Counter', before: 38, after: 38 },
      { name: 'List', before: 95, after: 8 },
      { name: 'ListItem', before: 82, after: 3 },
      { name: 'Footer', before: 24, after: 2 },
    ],
    [],
  );

  const maxBefore = Math.max(...rows.map((r) => r.before));
  const maxAfter = Math.max(...rows.map((r) => r.after));

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="perf-section">
      <h2 className="section-title">Rendering Performance Timeline</h2>
      <p className="section-subtitle">Compare a naive implementation to one optimized with React.memo and useMemo.</p>
      <div className="perf-grid">
        <div className="perf-column">
          <h3 className="perf-title">❌ WITHOUT OPTIMIZATION</h3>
          <div className="perf-list">
            {rows.map((r) => (
              <Row
                key={`b-${r.name}`}
                name={r.name}
                ms={r.before}
                widthPct={animate ? `${(r.before / maxBefore) * 100}%` : '0%'}
                color="#EC4899"
              />
            ))}
          </div>
        </div>
        <div className="perf-column">
          <h3 className="perf-title">✅ WITH REACT.MEMO + useMemo</h3>
          <div className="perf-list">
            {rows.map((r) => (
              <Row
                key={`a-${r.name}`}
                name={r.name}
                ms={r.after}
                widthPct={animate ? `${(r.after / maxAfter) * 100}%` : '0%'}
                color={r.after <= 8 ? '#10B981' : '#EC4899'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

