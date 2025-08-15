import logo from './logo.svg';
import './App.css';
import Greeting from "./Student.js";
import UserForm from "./userstatus.js";
import Counter from "./components/counter.js";
function App() {
  return (
    <div className="App">
      <Greeting name="hello" age="19" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UserForm />
        <Counter />
      </header>
    </div>
  );
}

export default App;
