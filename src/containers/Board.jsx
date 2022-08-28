import React, { useState, useEffect } from "react";
import BoardComp from "../components/BoardComp";
import store from "../store";

// 이하 컴포넌트의 복잡한 과정을 처리
function Board() {

    var [value, valueFunc] = useState(0);

    // 처음 1회만 실행
    useEffect(function() {
        store.subscribe(function() {valueFunc(store.getState().number)})
    }, []);

    return <BoardComp data={value}></BoardComp>
}

export default Board;