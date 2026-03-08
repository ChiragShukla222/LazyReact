import useCountUpOnView from '../hooks/useCountUpOnView.js';

function Stat({ count, label }) {
  const { ref, value } = useCountUpOnView(count);
  return (
    <div className="stat" ref={ref} data-count={count}>
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band">
      <Stat count="24+" label="VISUALIZATION MODULES" />
      <Stat count="18" label="REACT HOOKS COVERED" />
      <Stat count="120+" label="INTERACTIVE EXAMPLES" />
      <Stat count="5" label="DIFFICULTY LEVELS" />
    </section>
  );
}

