import logo from './logo.svg';
import './App.css';

function HelloWorld() {
  return (
    <div className="HelloWorld">
      <header className="HelloWorld-header">
        <img src={logo} className="HelloWorld-logo" alt="logo" />
        <h1>hello world</h1>
        <p>
          Edit <code>src/HelloWorld.js</code> and save to reload.
        </p>
        <a
          className="HelloWorld-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HelloWorld;
