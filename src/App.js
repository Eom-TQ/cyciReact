import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

import Inp1 from './comp/inp/input01'
import Oup1 from './comp/inp/output01'
import Ref from './comp/inp/Ref01'
import ProItemList from './comp/pro/ItemList'

import ProJoin from './comp/pro/Join'
import Login from './comp/pro/login'
import Ax1 from './comp/ax/ax01'
import Mypage from './comp/pro/mypage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cal1"} element={<Calc1 />} />

          <Route path={"/inp1"} element={<Inp1 />} />
          <Route path={"/oup1"} element={<Oup1 />} />
          <Route path={"/ref1"} element={<Ref />} />

          <Route path={"/pro1"} element={<ProJoin />} />
          <Route path={"/ax1"} element={<Ax1 />} />
          <Route path={"/itemList"} element={<ProItemList />}></Route>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/mypage"} element={<Mypage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return (
    <div style={{ border: '2px blue solid' }}>
      <Link to="/">Home으로 이동</Link>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link><br />
      <Link to="/cal1">Cal1로 이동하기</Link><br />

      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link><br />
      <Link to="/oup1">데이터 출력</Link><br />
      <Link to='/ref1'>Ref 사용하기</Link>

      <h4>Axios</h4>
      <Link to="/ax1">AXIOS 사용</Link><br />

      <h4>과제</h4>
      <Link to="/pro1">회원가입 창</Link><br />
      <Link to="/login">로그인 창</Link><br />

      <Link to="/itemList">아이템</Link>
    </div>
  )
}

export default App;
