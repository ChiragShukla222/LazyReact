import { useMemo, useState } from 'react';
import { TOPICS } from '../data/topics.js';

const TABS = [
  { id: 'fundamentals', label: 'Fundamentals' },
  { id: 'hooks', label: 'Hooks' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'ecosystem', label: 'Ecosystem' },
];

function TopicCard({ item }) {
  return (
    <article className="topic-card">
      <div className="topic-icon" style={{ background: `${item.color}22`, color: item.color }}>
        <span>{item.icon}</span>
      </div>
      <div className="topic-title">{item.title}</div>
      <div className="topic-description">{item.description}</div>
      <div className="topic-badges">
        {item.badges.map((b) => (
          <span
            key={b}
            className="topic-badge"
            style={{ color: item.color, background: `${item.color}12` }}
          >
            {b}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function TopicsSection() {
  const [active, setActive] = useState('fundamentals');
  const list = useMemo(() => TOPICS[active] ?? [], [active]);

  return (
    <section className="topics-section" id="topics">
      <div className="section-label">// MODULES</div>
      <h2 className="section-title">Every React Concept, Animated &amp; Explained</h2>
      <p className="section-subtitle">
        Master React from first principles to advanced patterns with highly visual, interaction-driven lessons.
      </p>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? 'active' : ''}`}
            onClick={() => setActive(t.id)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="topics-grid">
        {list.map((item) => (
          <TopicCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

