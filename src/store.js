import { createStore } from "redux";

// id: t1, password: 1234as12 하면 됨
export default createStore(function (state, action) {
  if (state === undefined) {
    return {token: "", isLogin: false,  searchText: "", currentIdx: 0 };
  }

  if (action.type === "SEARCH") {
    return { ...state, searchText: action.value };
  }

  if (action.type === "CHANGEINDEX") {
    return { ...state, currentIdx: action.value };
  }
  if(action.type === "LOGIN"){
    return { ...state, isLogin: true, token: action.value };
  }
  
  return state;
});
