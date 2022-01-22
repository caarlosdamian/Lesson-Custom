import "./App.css";
// import { CounterApp } from "./components/01-useState/CounterApp";
import { CounterAppWithHook } from "./components/01-useState/CounterAppWithHook";
import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterAppWithHook />
        <hr></hr>
        <CounterWithCustomHook/>
      </header>
    </div>
  );
}

export default App;
