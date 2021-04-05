import logo from './ceemonee.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Christian Romero React Portfolio
        </p>
        
        <p>My Projects</p>
        <a
          className="App-link"
          href="https://rylawesome.github.io/Quarantini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cocktail Menu
        </a>
        <a
          className="App-link"
          href="https://devourthyburger.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Burger Munch
        </a>
        <a
          className="App-link"
          href="https://romer0-c.github.io/Password_generator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Password Generator
        </a>
      </header>

      <body className="contactMe">
      <h1>Contact Me</h1>
      <a
          className="App-link"
          href="https://www.linkedin.com/in/christian-cee-romero-rhcsa-4817a7bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/Romer0-c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </body>

      <footer className="footer"> Don't judge me too harshly on this portfolio :) </footer>
    </div>
  );
}

export default App;
