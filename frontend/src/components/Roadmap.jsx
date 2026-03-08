const PHASES = [
  {
    emoji: '🌱',
    color: '#10B981',
    phase: 'PHASE 1 — REACT FOUNDATIONS',
    title: 'Get comfortable with the fundamentals.',
    topics: ['JSX', 'Components', 'Props', 'State', 'Events', 'Lists & Keys'],
  },
  {
    emoji: '⚡',
    color: '#0EA5E9',
    phase: 'PHASE 2 — CORE HOOKS & PATTERNS',
    title: 'Build solid mental models for hooks.',
    topics: ['useState', 'useEffect', 'useRef', 'Conditional Rendering', 'Composition', 'Component Design'],
  },
  {
    emoji: '🔧',
    color: '#7C3AED',
    phase: 'PHASE 3 — ADVANCED HOOKS',
    title: 'Scale your components and state graphs.',
    topics: ['useCallback', 'useMemo', 'useContext', 'useReducer', 'Custom Hooks', 'Error Boundaries'],
  },
  {
    emoji: '🚀',
    color: '#F59E0B',
    phase: 'PHASE 4 — PERFORMANCE & ARCHITECTURE',
    title: 'Ship fast, resilient React apps.',
    topics: ['React.memo', 'Code Splitting', 'Lazy Loading', 'Profiler', 'Concurrent Mode', 'Suspense'],
  },
  {
    emoji: '🌐',
    color: '#EC4899',
    phase: 'PHASE 5 — ECOSYSTEM MASTERY',
    title: 'Level up with the wider ecosystem.',
    topics: ['React Router', 'React Query', 'Redux/Zustand', 'Next.js', 'Testing', 'Deployment'],
  },
];

export default function Roadmap() {
  return (
    <section className="roadmap-section" id="roadmap">
      <h2 className="section-title">Learning Roadmap</h2>
      <p className="section-subtitle">Follow a curated path from absolute beginner to React expert.</p>

      <div className="roadmap-wrapper">
        <div className="roadmap-line" />
        <div className="roadmap-list">
          {PHASES.map((p) => (
            <div className="roadmap-item" key={p.phase}>
              <div className="roadmap-dot" style={{ borderColor: p.color }}>
                {p.emoji}
              </div>
              <div className="roadmap-card">
                <div className="roadmap-phase" style={{ color: p.color }}>
                  {p.phase}
                </div>
                <div className="roadmap-title">{p.title}</div>
                <div className="roadmap-chips">
                  {p.topics.map((t) => (
                    <span key={t} className="roadmap-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

