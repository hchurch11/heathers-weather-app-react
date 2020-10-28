import "./App.css";

import Footer from "./Footer";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather defaultCity="Salt Lake City" />
        </div>

        <Footer />
      </div>
    </div>
  );
}
