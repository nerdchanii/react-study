import "./App.css";
import { useFunnel } from "./hooks/useFunnel/Funnel";
function App() {
  const [Funnel, setStep] = useFunnel(["age", "name"]);

  return (
    <Funnel>
      <Funnel.Steps name="age">
        <h1>How old are you?</h1>
        <button onClick={() => setStep("name")}>Next</button>
      </Funnel.Steps>
      <Funnel.Steps name="name">
        <h1>nice meet you!</h1>
        <button onClick={() => setStep("age")}>Next</button>
      </Funnel.Steps>
    </Funnel>
  );
}

export default App;
