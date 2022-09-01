import logo from "./logo.svg";
import "./App.css";
import NavBar from "./containers/NavBar";
import Board from "./containers/Board";
import PostBoard from "./containers/PostBoard";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./containers/Footer";
import SideBar from "./containers/SideBar";
import { Navigate, Link, Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import WritingBoard from "./containers/WritingBoard";
import Login from "./containers/Login";
import { useEffect } from "react";


function App() {
  var isLogin = useSelector((state) => state.isLogin);
  return (
    <div>
      <Routes>
        {/* 로그인 모듈 */}
        <Route path="/login/" element={
         !isLogin ? <App_Login></App_Login> : <Navigate to="/"></Navigate>    
        }></Route>
        {/* 일반 모듈 */}
        <Route path="/*" element={
          isLogin ? <App_Board></App_Board> : <Navigate to="/login/"></Navigate>   
        }></Route>
      </Routes>
    </div>
  );
}

function App_Login() {
  return (
    <div>
      <Login></Login>
    </div>
  );
}

function App_Board() {
  return (
    <div className="App container d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <div className="row pt-3">
        <div className="col-3 bg-primary bg-opacity-25">
          <SideBar></SideBar>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<div>안녕하세요~! 게시판을 눌려서 글을 보세요</div>}></Route>
            <Route path="/board/*" element={<Board></Board>}></Route>
            <Route path="/post/" element={<PostBoard></PostBoard>}></Route>
            <Route path="/writing/:id" element={<WritingBoard></WritingBoard>}></Route>
          </Routes>
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
