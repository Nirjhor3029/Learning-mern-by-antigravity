import { useState } from 'react'
import './App.css'

function App() {
  // 1. Counter State (Number)
  const [count, setCount] = useState(0)

  // 2. Input State (String)
  const [name, setName] = useState('Hasan')

  // 3. Toggle State (Boolean)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="container">
      <h1>Class 07: React State Practice</h1>
      <p>Mastering the <code>useState</code> hook</p>

      <hr />

      {/* Example 1: Counter */}
      <section className="card">
        <h2>1. Counter Example</h2>
        <p>Current count: <strong>{count}</strong></p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      {/* Example 2: Input Handling */}
      <section className="card">
        <h2>2. Input Example</h2>
        <p>Your name is: <strong>{name}</strong></p>
        <input
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={(e) => setName(e.target.value)} // e.target.value is the value of the input
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </section>

      {/* Example 3: Conditional Rendering with State */}
      <section className="card">
        <h2>3. Toggle Example (Boolean)</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Secret Message
        </button>

        {/* Conditional Rendering */}
        {isVisible && (
          <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
            <p>🔓 React State is awesome! You can show/hide elements easily.</p>
          </div>
        )}
      </section>

      <footer>
        <p>Assignment: Add a button to reset the name to "Anonymous"!</p>
      </footer>
    </div>
  )
}

export default App
