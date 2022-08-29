import { createStore } from "redux";
export default createStore(function (state, action) {
  if (state === undefined) {
    return { number: 0, currentIdx: 0 };
  }
  if (action.type === "CHANGE") {
    return { ...state, number: action.value };
  }
  if (action.type === "CHANGEINDEX") {
    return { ...state, currentIdx: action.value };
  }
  return state;
});
