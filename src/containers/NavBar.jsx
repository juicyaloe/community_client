import React, { useState, useEffect } from "react";
import NavBarComp from "../components/NavBarComp";
import store from "../store";

// 이하 컴포넌트의 복잡한 과정을 처리
function NavBar() {

    // 처음 1회만 실행
    useEffect(function() {
    }, []);

    return <NavBarComp
    ></NavBarComp>
}

export default NavBar;