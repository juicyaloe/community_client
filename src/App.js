import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import Board from './containers/Board';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './containers/Footer';

function App() {
  return (
    // 단순히 컴포넌트를 나열하는 정도로만 구현
    <div className="App container d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <div class="row pt-3">
        <div class="col-3">
          <Board></Board>
        </div>
        <div class="col-9">
          <Board></Board>
        </div>
      </div>
      <div class="mt-auto"><Footer></Footer></div>
    </div>
  );
}

export default App;
