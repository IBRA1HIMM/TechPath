import Header from "./Components/Header";
import Statics from "./Components/Statics";
import Tracks from "./Components/Tracks";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="FirstSection">
        <Header />
      </div>
  
      <div>
        <Statics />
      </div>
      <div className="TrackSection">
        <Tracks/>
      </div>
    </div>
  );
}

export default App;
