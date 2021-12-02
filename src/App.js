import * as React from "react";
import BarChart from './components/BarChart';
import { data } from "./data/data.js";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="visualisation" element={<Visualisation />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <main>
        <h2>Homepagina</h2>
        <p>Dit is de eindopdracht van frontend-apps</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/visualisation">Visualisation</Link>
      </nav>
    </>
  );
}
function Visualisation() {
  return (
    <>
      <main>
        <h2>Dikke visualisatie ouwe, helemaal leip.</h2>
        <BarChart data={data} />
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/visualisation">Visualisation</Link>
      </nav>
    </>
  );
}
export default App;
