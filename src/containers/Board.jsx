import React, { useState, useEffect } from "react";
import BoardComp from "../components/BoardComp";
import store from "../store";

// 이하 컴포넌트의 복잡한 과정을 처리
function Board() {

    // 처음 1회만 실행
    useEffect(function() {
    }, []);

    return <BoardComp
    ></BoardComp>
}

export default Board;