import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

import Inp1 from './comp/inp/input01'
import Oup1 from './comp/inp/output01'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About></About>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/calc1"} element={<Calc1></Calc1>}></Route>

          <Route path={"/inp"} element={<Inp1></Inp1>}></Route>
          <Route path={"/oup1"} element={<Oup1></Oup1>}></Route>
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

      <h4>데이터 옮기기</h4>
      <Link to="/inp">데이터 입력</Link><br />
      <Link to="/oup1">데이터 출력</Link>
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
