import { createStore } from "redux";
export default createStore(function(state, action) {
    if (state === undefined) {
        return {number:0}
    }
    if (action.type === 'CHANGE') {
        return {...state, number:action.value}
    }
    return state;
})