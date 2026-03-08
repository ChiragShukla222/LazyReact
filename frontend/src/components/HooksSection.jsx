const HOOKS = [
  { name: 'useState', color: '#00F5FF', badge: 'Core', description: 'Local component state with simple setter API.' },
  { name: 'useEffect', color: '#7C3AED', badge: 'Core', description: 'Synchronize side effects with component lifecycle.' },
  { name: 'useContext', color: '#EC4899', badge: 'Core', description: 'Subscribe to React context values without prop drilling.' },
  { name: 'useReducer', color: '#10B981', badge: 'Core', description: 'Structured state transitions driven by actions.' },
  { name: 'useCallback', color: '#F59E0B', badge: 'Perf', description: 'Memoize callback references to avoid re-renders.' },
  { name: 'useMemo', color: '#0EA5E9', badge: 'Perf', description: 'Cache expensive computations between renders.' },
  { name: 'useRef', color: '#00F5FF', badge: 'Core', description: 'Mutable container for values that survive re-renders.' },
  { name: 'useLayoutEffect', color: '#7C3AED', badge: 'DOM', description: 'Run effects synchronously after DOM mutations.' },
  { name: 'useId', color: '#EC4899', badge: 'New', description: 'Generate stable unique IDs for accessibility and lists.' },
  { name: 'useTransition', color: '#10B981', badge: 'R18', description: 'Mark updates as non-urgent for smoother UI.' },
  { name: 'useDeferredValue', color: '#F59E0B', badge: 'R18', description: 'Defer expensive updates while keeping input responsive.' },
  { name: 'useSyncExternalStore', color: '#0EA5E9', badge: 'R18', description: 'Subscribe safely to external stores with concurrent rendering.' },
];

function HookCard({ h }) {
  return (
    <article className="hook-card" style={{ color: h.color }}>
      <div className="hook-badge">{h.badge}</div>
      <div className="hook-name">{h.name}</div>
      <div className="hook-description">{h.description}</div>
    </article>
  );
}

export default function HooksSection() {
  return (
    <section className="hooks-section">
      <h2 className="section-title">Hooks Reference</h2>
      <p className="section-subtitle">Quick visual cheat sheet of the most important React hooks.</p>
      <div className="hooks-grid">
        {HOOKS.map((h) => (
          <HookCard key={h.name} h={h} />
        ))}
      </div>
    </section>
  );
}

