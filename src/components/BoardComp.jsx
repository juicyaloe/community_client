/************************************************
 * Board 연결
 * 
 * 
*************************************************/

import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {getWriting, postWriting, login} from "../funcs/apis";
import { TOKEN } from "../funcs/TOKEN";

// 넘겨받은 정보를 show 하는 정도로만 구현
function BoardComp(props) {
    return <div>
        {props.writinglist}
 
        <button onClick={async function() {
            let response = await login("test1", "12341231a")
            
            if (response.status == 200) {
                response.json().then(
                    (result) => console.log(result.token)
                )
            }
            else {
                console.log("error")
            }

        }}>로그인 테스트</button>


    </div>
}

export default BoardComp;