import logo from "./logo.svg";
import "./App.css";
import AAA from "./Components/Board";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

async function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      data: "ad",
      number: 123123,
    };
  }
  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number++;
  }
  if (action.type === "GET") {
    newState.data = await GetJson();
    console.log(newState.data);
  }
  return newState;
}

async function GetJson() {
  var data;
  await fetch("file.json")
    .then(function (response) {
      return response.json();
    })
    .then(
      function (json) {
        data = json;
      }.bind(this)
    );
  return data;
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
