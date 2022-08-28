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