export default function PropsFlow() {
  return (
    <section className="props-section">
      <h2 className="section-title">Props &amp; Data Flow</h2>
      <p className="section-subtitle">Trace how props move through a React component tree.</p>
      <div className="props-grid">
        <div className="props-visual">
          <div className="props-node props-node-app">&lt;App /&gt;</div>
          <div className="props-arrow">
            <span className="props-pill">{'{name}'}</span>
          </div>
          <div className="props-node props-node-layout">&lt;Layout /&gt;</div>
          <div className="props-arrow">
            <span className="props-pill">{'{count}'}</span>
          </div>
          <div className="props-node props-node-counter">&lt;Counter /&gt;</div>
          <div className="props-arrow">
            <span className="props-pill">{'{count}'}</span>
          </div>
          <div className="props-node props-node-display">&lt;Display /&gt;</div>
        </div>

        <div className="props-code">
          <pre>
            <code>
              {'\n'}
              <span className="tok-keyword">function</span> <span className="tok-fn">App</span>() {'{'}
              {'\n'}  <span className="tok-keyword">const</span>{' '}
              <span className="tok-var">[count</span>, <span className="tok-var">setCount]</span> ={' '}
              <span className="tok-hook">useState</span>(<span className="tok-number">0</span>);
              {'\n'}  <span className="tok-keyword">return</span> ({'\n'}    &lt;
              <span className="tok-component">Layout</span> <span className="tok-prop">name</span>=
              <span className="tok-string">"ReactViz"</span> <span className="tok-prop">count</span>=
              <span className="tok-var">count</span> /&gt;{'\n'}  );{'\n'}
              {'}'}{'\n\n'}
              <span className="tok-keyword">function</span> <span className="tok-fn">Layout</span>({'{'}{' '}
              <span className="tok-var">name</span>, <span className="tok-var">count</span> {'}'}) {'{'}
              {'\n'}  <span className="tok-keyword">return</span> ({'\n'}    &lt;&gt;{'\n'}      &lt;
              <span className="tok-component">Counter</span> <span className="tok-prop">count</span>=
              <span className="tok-var">count</span> /&gt;{'\n'}      &lt;
              <span className="tok-component">Display</span> <span className="tok-prop">label</span>=
              <span className="tok-var">name</span> <span className="tok-prop">value</span>=
              <span className="tok-var">count</span> /&gt;{'\n'}    &lt;/&gt;{'\n'}  );{'\n'}
              {'}'}
              {'\n'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

