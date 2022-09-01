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
            <Route exact path="/" element={<Board></Board>}></Route>
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
