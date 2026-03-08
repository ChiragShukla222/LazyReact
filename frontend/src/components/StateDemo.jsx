import { useEffect, useMemo, useState } from 'react';

function LifecyclePanel() {
  const phases = useMemo(() => ['mount', 'update', 'unmount'], []);
  const [active, setActive] = useState(phases[0]);

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setActive(phases[idx]);
    }, 1800);
    return () => clearInterval(timer);
  }, [phases]);

  return (
    <div className="lifecycle-panel">
      <div className={`lifecycle-item ${active === 'mount' ? 'active' : ''}`} data-phase="mount">
        <span className="badge">🟢 Mount</span>
        <span>useEffect(fn, [])</span>
      </div>
      <div className={`lifecycle-item ${active === 'update' ? 'active' : ''}`} data-phase="update">
        <span className="badge">🔵 Update</span>
        <span>State changed → Re-render</span>
      </div>
      <div className={`lifecycle-item ${active === 'unmount' ? 'active' : ''}`} data-phase="unmount">
        <span className="badge">🔴 Unmount</span>
        <span>Cleanup runs</span>
      </div>
    </div>
  );
}

export default function StateDemo() {
  const [value, setValue] = useState(0);
  const [rerenders, setRerenders] = useState(0);
  const [bump, setBump] = useState(false);
  const capped = Math.min(rerenders, 20);

  const onDelta = (d) => {
    setValue((v) => v + d);
    setRerenders((r) => r + 1);
    setBump(true);
    window.setTimeout(() => setBump(false), 150);
  };

  const onReset = () => {
    setValue(0);
    setRerenders(0);
    setBump(true);
    window.setTimeout(() => setBump(false), 150);
  };

  const highlight = rerenders > 0;

  return (
    <section className="state-demo" id="playground">
      <div className="state-demo-grid">
        <div className="state-demo-left">
          <div className="demo-card">
            <div className="demo-label">COMPONENT STATE</div>
            <div className={`demo-counter-value ${bump ? 'bump' : ''}`}>{value}</div>
            <div className="demo-status">✓ Re-render triggered</div>
            <div className="demo-controls">
              <button type="button" onClick={() => onDelta(-10)}>
                -10
              </button>
              <button type="button" onClick={() => onDelta(-1)}>
                −
              </button>
              <button type="button" onClick={onReset}>
                reset
              </button>
              <button type="button" onClick={() => onDelta(1)}>
                +
              </button>
              <button type="button" onClick={() => onDelta(10)}>
                +10
              </button>
            </div>

            <div className="demo-rerenders">
              <div className="demo-rerenders-header">
                <span>Re-renders</span>
                <span>{rerenders}</span>
              </div>
              <div className="demo-rerenders-bar">
                <div className="demo-rerenders-bar-fill" style={{ width: `${(capped / 20) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        <div className="state-demo-right">
          <div className="component-tree">
            <div className="tree-node tree-node-app">App</div>
            <div className="tree-children">
              <div className="tree-node tree-node-header">Header</div>
              <div
                className="tree-node tree-node-counter"
                style={highlight ? { filter: 'brightness(1.5)', boxShadow: '0 0 18px rgba(0,245,255,0.4)' } : null}
              >
                Counter
                <div className="tree-children">
                  <div
                    className="tree-node tree-node-display"
                    style={
                      highlight ? { filter: 'brightness(1.5)', boxShadow: '0 0 18px rgba(0,245,255,0.4)' } : null
                    }
                  >
                    Display
                  </div>
                  <div className="tree-node tree-node-controls">Controls</div>
                </div>
              </div>
              <div className="tree-node tree-node-footer">Footer</div>
            </div>
          </div>

          <LifecyclePanel />
        </div>
      </div>
    </section>
  );
}

