export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          React<span className="nav-logo-highlight">Viz</span>.dev
        </div>
        <nav className="nav-links">
          <a href="#topics">Topics</a>
          <a href="#visualize">Visualize</a>
          <a href="#playground">Playground</a>
          <a href="#roadmap">Roadmap</a>
          <button className="btn btn-primary">Start Learning</button>
        </nav>
      </div>
    </header>
  );
}

