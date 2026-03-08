import { useMemo, useState } from 'react';

function Node({ text, state, borderHidden }) {
  const style = borderHidden ? { borderColor: 'transparent' } : null;
  return (
    <div className={`vdom-node ${state}`} style={style}>
      {text}
    </div>
  );
}

export default function VDomDiff() {
  const prevNodes = useMemo(
    () => [
      { text: '<App>', state: 'same' },
      { text: '  <Header />', state: 'same' },
      { text: '  <Counter value={1} />', state: 'updated' },
      { text: '  <List items={[1,2,3]} />', state: 'removed' },
      { text: '  <Footer />', state: 'same' },
    ],
    [],
  );

  const nextNodes = useMemo(
    () => [
      { text: '<App>', state: 'same' },
      { text: '  <Header title="ReactViz" />', state: 'updated' },
      { text: '  <Counter value={2} />', state: 'updated' },
      { text: '  <VirtualizedList items={items} />', state: 'added' },
      { text: '  <Footer />', state: 'same' },
    ],
    [],
  );

  const [revealIndex, setRevealIndex] = useState(Infinity);

  const run = () => {
    setRevealIndex(0);
    nextNodes.forEach((_, i) => {
      window.setTimeout(() => setRevealIndex((prev) => Math.max(prev, i + 1)), 120 * i);
    });
  };

  return (
    <section className="vdom-section">
      <h2 className="section-title">Virtual DOM Diff Visualizer</h2>
      <p className="section-subtitle">See how React compares trees and applies minimal DOM mutations.</p>
      <div className="vdom-grid">
        <div className="vdom-panel">
          <div className="vdom-title">⬅ Previous VDOM</div>
          <div className="vdom-list">
            {prevNodes.map((n) => (
              <Node key={n.text} {...n} />
            ))}
          </div>
        </div>
        <div className="vdom-center">
          <div className="vdom-arrow">⇒</div>
          <button className="btn btn-primary" type="button" onClick={run}>
            Run Diff Animation
          </button>
        </div>
        <div className="vdom-panel">
          <div className="vdom-title">Next VDOM ➡</div>
          <div className="vdom-list">
            {nextNodes.map((n, idx) => (
              <Node key={n.text} {...n} borderHidden={idx >= revealIndex} />
            ))}
          </div>
        </div>
      </div>
      <div className="vdom-legend">
        <span className="legend-item legend-same">Unchanged</span>
        <span className="legend-item legend-updated">Updated</span>
        <span className="legend-item legend-removed">Removed</span>
        <span className="legend-item legend-added">Added</span>
      </div>
    </section>
  );
}

