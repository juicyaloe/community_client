import { createStore } from "redux";
export default createStore(function (state, action) {
  if (state === undefined) {
    return { searchText: "", currentIdx: 0 };
  }
  if (action.type === "SEARCH") {
    return { ...state, searchText: action.value };
  }
  if (action.type === "CHANGEINDEX") {
    return { ...state, currentIdx: action.value };
  }
  return state;
});
