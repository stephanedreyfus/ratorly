import { BrowserRouter} from "react-router-dom";
import Navigation from ".Navigation";
import Routes from "./Routes";
import RatorlyApi from "./RatorlyApi";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>Eventually search for and rate movies.</p>
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
