import logo from "./logo.svg";
import "./App.css";
import NavBar from "./containers/NavBar";
import Board from "./containers/Board";
import PostBoard from "./containers/PostBoard";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./containers/Footer";
import SideBar from "./containers/SideBar";
import {Link, Router, Routes, Route} from 'react-router-dom';
import WritingBoard from "./containers/WritingBoard";
import Login from "./containers/Login";

function App() {
  return (
    // 단순히 컴포넌트를 나열하는 정도로만 구현
    // className은 부트스트랩 css 적용
    <div className="App container d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <div className="row pt-3">
        <div className="col-3 bg-primary bg-opacity-25">
          <SideBar></SideBar>
        </div>
        <div className="col-9">
          <Routes>
            {/* board: 글 보여주기, post: 글 쓰기, writing: 글 상세 내역 */}
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
