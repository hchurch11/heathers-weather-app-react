import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Search />
          <Weather />
        </div>
        <div className="row forecast">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
