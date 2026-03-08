export const TOPICS = {
  fundamentals: [
    {
      icon: '🔷',
      color: '#00F5FF',
      title: 'JSX & Components',
      description:
        'Visual breakdown of JSX transformation, component anatomy, and the render pipeline from JSX to DOM.',
      badges: ['Beginner', 'Visual', 'Interactive'],
    },
    {
      icon: '🔄',
      color: '#7C3AED',
      title: 'Props & Data Flow',
      description:
        'Animated visualization of unidirectional data flow, prop drilling, and component communication patterns.',
      badges: ['Beginner', '3D Tree'],
    },
    {
      icon: '⚡',
      color: '#EC4899',
      title: 'State Management',
      description:
        'Watch state changes ripple through component trees in real time with our live re-render simulator.',
      badges: ['Core', 'Live Demo'],
    },
    {
      icon: '🌀',
      color: '#10B981',
      title: 'Component Lifecycle',
      description:
        'Animated lifecycle diagram showing Mount, Update, Unmount phases and when each hook fires.',
      badges: ['Visual', 'Timeline'],
    },
    {
      icon: '🧩',
      color: '#F59E0B',
      title: 'Virtual DOM & Reconciliation',
      description:
        "See React's diffing algorithm in action — how it compares virtual trees and applies minimal DOM mutations.",
      badges: ['Core', 'Animated'],
    },
    {
      icon: '📦',
      color: '#0EA5E9',
      title: 'Conditional Rendering',
      description:
        'Visual guide to all conditional rendering patterns: ternary, &&, switch, and component mapping.',
      badges: ['Beginner', 'Patterns'],
    },
  ],
  hooks: [
    {
      icon: '🎣',
      color: '#00F5FF',
      title: 'useState Deep Dive',
      description: 'State machine visualization showing state transitions, batching, and functional updates.',
      badges: ['Core', 'State'],
    },
    {
      icon: '🔁',
      color: '#7C3AED',
      title: 'useEffect Mastery',
      description:
        'Dependency array visualizer with animated effect/cleanup cycle and all common pitfall patterns.',
      badges: ['Core', 'Effects'],
    },
    {
      icon: '🚀',
      color: '#10B981',
      title: 'useCallback & useMemo',
      description:
        'Side-by-side comparison of with/without memoization, showing reference equality and re-render prevention.',
      badges: ['Performance'],
    },
    {
      icon: '📡',
      color: '#EC4899',
      title: 'useContext & Provider',
      description:
        'Animated context tree showing how values propagate through the provider hierarchy without prop drilling.',
      badges: ['Advanced', '3D'],
    },
    {
      icon: '🔀',
      color: '#F59E0B',
      title: 'useReducer Patterns',
      description:
        'State machine diagram for useReducer — actions, dispatch, and reducer function with flux visualization.',
      badges: ['Advanced'],
    },
    {
      icon: '📐',
      color: '#0EA5E9',
      title: 'useRef & DOM Access',
      description:
        'Visual showing the difference between state and refs, plus ref forwarding and imperative handles.',
      badges: ['Core'],
    },
  ],
  advanced: [
    {
      icon: '🌊',
      color: '#00F5FF',
      title: 'Suspense & Concurrent',
      description: 'Explore how React 18 schedules rendering work.',
      badges: ['React 18', 'Advanced'],
    },
    {
      icon: '⚙️',
      color: '#7C3AED',
      title: 'Server Components',
      description: 'Understand React 19 server-first rendering model.',
      badges: ['React 19', 'New'],
    },
    { icon: '🎭', color: '#EC4899', title: 'Higher-Order Components', description: 'Pattern library of cross-cutting behaviors.', badges: ['Patterns'] },
    { icon: '🔧', color: '#10B981', title: 'Custom Hooks', description: 'Compose behavior with reusable hooks.', badges: ['Patterns', 'HOF'] },
    { icon: '🌐', color: '#F59E0B', title: 'Code Splitting & Lazy', description: 'Performance gains from route and component-level splitting.', badges: ['Performance'] },
    { icon: '🎯', color: '#0EA5E9', title: 'Error Boundaries', description: 'Catch render-time errors and keep UI resilient.', badges: ['Resilience'] },
  ],
  ecosystem: [
    { icon: '🗄️', color: '#00F5FF', title: 'Redux & Zustand', description: 'Compare global state models with vivid 3D graphs.', badges: ['State Mgmt', '3D'] },
    { icon: '🔀', color: '#7C3AED', title: 'React Router v6', description: 'Visualize nested routes and transitions.', badges: ['Routing'] },
    { icon: '📡', color: '#EC4899', title: 'React Query', description: 'See cache lifecycles, stale states, and background refetches.', badges: ['Data Fetching'] },
    { icon: '🎨', color: '#10B981', title: 'Styled Components', description: 'Tour CSS-in-JS and dynamic styling.', badges: ['Styling'] },
    { icon: '🧪', color: '#F59E0B', title: 'Testing Library', description: 'Map from user flows to robust tests.', badges: ['Testing'] },
    { icon: '⚡', color: '#0EA5E9', title: 'Next.js App Router', description: 'Understand layouts, streaming and data fetching.', badges: ['Framework', 'New'] },
  ],
};

