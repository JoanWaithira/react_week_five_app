import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Nairobi" />

        <footer>
          This project is created by{" "}
          <a href="https://www.linkedin.com/in/joan-waithira/">Joan Waithira</a>
          {""} and is hosted on {""}
          <a href="https://github.com/JoanWaithira/react_week_five_app">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
