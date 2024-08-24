import Player from "./components/player/Player";
import TimerChallenge from "./components/timer-challenge/TimerChallenge";
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="countdown-logo.jpg"
          alt="logo-not-found"
        />
        <p>
          <label>THE</label>
          <label style={{ color: "orange" }}>ALMOST</label>
          <label>FINAL COUNTDOWN</label>
        </p>
      </header>

      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>

    </div>
  );
}

export default App;
