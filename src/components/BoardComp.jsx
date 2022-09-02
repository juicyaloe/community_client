/************************************************
 * Board 연결
 * 
 * 
*************************************************/

import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {getWriting, postWriting, login, getPost, register} from "../funcs/apis";
import {Link, Router, Routes, Route} from 'react-router-dom';
import {BOARDLIST, boardList} from "../funcs/boardManage";

// 넘겨받은 정보를 show 하는 정도로만 구현
function BoardComp(props) {

    return <div>{props.data}
    
        <button onClick={async function() {
            let response = await register("t3", "1234as12", "test3@test.com");
            console.log(response);

        }}>
            회원 가입 테스트 버튼
        </button>
    
    </div>
}

        //  <button onClick={async function() {
        //     let response = await login("test1", "12341231a")
            
        //     if (response.status === 200) {
        //         response.json().then(
        //             (result) => console.log(result.token)
        //         )
        //     }
        //     else {
        //         console.log("error")
        //     }

        // }}>로그인 테스트</button>

        // <button onClick={async function() {
        //     let response = await getPost("102")
            
        //     console.log(response.title)
        //     console.log(response.content)
        //     console.log(response.board)

        // }}>글 하나 불러오기 테스트</button> 

export default BoardComp;