import Hero from './components/Hero'
import InfoCard from './components/InfoCard';

function App() {
  // Logic section (JavaScript)
  const name = "Nirjhor";
  const currentClass = "Class 06: React Fundamentals";

  return (
    // UI section (JSX)
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1 style={{ color: "blue" }}>MERN Stack Learning Journey</h1>
      <p>This is your first React App!</p>

      {/* Using our Component and passing data via Props */}
      <Hero userName={name} topic={currentClass} />
      <Hero userName="Guest" topic="How Components work" />

      <hr />


      {/* Task: Create a component called InfoCard that takes two props: title and description. Render the title and description in the component. */}

      <InfoCard title="Info Card 1" description="Description 1" />
      <InfoCard title="Info Card 2" description="Description 2" />

      <hr />

      <footer style={{ marginTop: "20px", fontSize: "14px", color: "gray" }}>
        React Lesson 1: JSX & Components
      </footer>
    </div>
  )
}

export default App
