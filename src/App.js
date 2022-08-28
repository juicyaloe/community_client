import logo from "./logo.svg";
import "./App.css";
import AAA from "./Components/Board";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 123123,
    };
  }
  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

const store = createStore(reducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <AAA />
      </Provider>
    </div>
  );
}

export default App;
