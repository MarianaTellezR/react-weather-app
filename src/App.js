import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="San Francisco" />
      <footer>
        <p>
          Designed and coded by{" "}
          <a
            href="https://www.linkedin.com/in/mariana-tellez-resendiz/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            Mariana Tellez Resendiz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MarianaTellezR/react-weather-app"
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository"
          >
            open-sourced on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
