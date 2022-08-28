/************************************************
 * 하단 바 관련 컴포넌트 정의
 * 
 * 
*************************************************/

import React, {useEffect, useState} from "react";
import FooterComp from "../components/FooterComp";

function Footer() {
    
    // 처음 1회만 실행
    useEffect(function() {
    }, []);

    return <FooterComp>
    </FooterComp>
}

export default Footer;