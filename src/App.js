import logo from "./logo.svg";
import "./App.css";
import AAA from "./Components/Board";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      data: [],
      number: 123123,
    };
  }
  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number++;
    Post();
  }

  if (action.type === "GET") {
    newState.data = GetURL();
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
  console.log("AAAAA", data);
  return data;
}
function Post() {
  fetch("http://13.124.202.172/api/", {
    method: "POST",
    body: JSON.stringify({
      title: "Test",
      body: "I am testing!",
      userId: 1,
    }),
  }).then((response) => console.log(response));
}

async function GetURL() {
  var data;
  await fetch("http://13.124.202.172/api/")
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
