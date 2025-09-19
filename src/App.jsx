import { useState } from "react";
import "./App.css"; 

function App() {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => setCount(prev => prev + 1);
  const DecreaseCount = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const ResetCount = () => setCount(0);

  return (
    <div className="page">
      <div className="card">
        <header className="card-header">
          <h1 className="title">Counter App</h1>
          <p className="subtitle">Simple, clean and responsive</p>
        </header>

        <main className="card-body">
          <div className="count-wrap" aria-live="polite">
            <span className="count">{count}</span>
          </div>

          <div className="buttons">
            <button className="btn btn-primary" onClick={IncreaseCount}>Increase</button>
            <button className="btn btn-ghost" onClick={DecreaseCount}>Decrease</button>
            <button className="btn btn-reset" onClick={ResetCount}>Reset</button>
          </div>
        </main>

        <footer className="card-footer">
          <small>No negative values — minimum is 0</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
