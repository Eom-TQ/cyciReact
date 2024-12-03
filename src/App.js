import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About></About>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/calc1"} element={<Calc1></Calc1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About으로 이동</Link><br />
      <Link to="/calc1">Calc1로 이동</Link>
    </div>
  )
}

function About() {
  return (
    <div style={{
      border: "2px solid blue"
    }}>

      <Link to="/">Home로 이동</Link><br />
    </div>
  )
}

export default App;
