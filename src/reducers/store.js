export default function mainStore(state, action) {
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
  
  if(action.type === "LOGOUT") {
    return { ...state, isLogin: false, token: ""}
  }
  return state;
}


