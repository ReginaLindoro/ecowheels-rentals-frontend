import logo from '../images/logo.svg';
import '../css/App.css';
import { HardwareView } from '../features/hardwareSets/HardwareView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EcoWheels Rental
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HardwareView />
    </div>
  );
}

export default App;
