import logo from './gitkraken.svg';
import './color.css';
import './App.css';


function App() {
  return (
    <div className="App">
    <legend>
    <nav>
    <ul>
    <li><button class="rounded"><a href="App-link"><h3>home</h3></a></button></li>
    </ul>
    </nav>
    </legend>

      <header className="App-header">
        <img src={logo} className="App-gitkraken" alt="git" />
        <br/>
        <p>
          <b>"Ryan's portfolio and recent work/projects, <br/>and contact info."</b>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3><b>Enter</b></h3>
        </a>
      </header>
    </div>
  );
}

export default App;
