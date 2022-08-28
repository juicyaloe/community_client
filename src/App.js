import logo from './logo.svg';
import './App.css';
import Menu from './containers/Menu';
import Board from './containers/Board';

function App() {
  return (
    // 단순히 컴포넌트를 나열하는 정도로만 구현
    <div className="App">
      <Menu></Menu>
      <Board></Board>
    </div>
  );
}

export default App;
