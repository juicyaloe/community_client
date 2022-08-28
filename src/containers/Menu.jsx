import React, { useState, useEffect } from "react";
import MenuComp from "../components/MenuComp";
import store from "../store";

// 이하 컴포넌트의 복잡한 과정을 처리
function Menu() {

    // 처음 1회만 실행
    useEffect(function() {
        
    }, []);

    return <MenuComp onClick={function() {
        store.dispatch({type: 'CHANGE', value:5}
        )}}></MenuComp>
}

export default Menu;