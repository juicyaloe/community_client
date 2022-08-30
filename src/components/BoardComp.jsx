/************************************************
 * Board 연결
 * 
 * 
*************************************************/

import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {getWriting, postWriting} from "../funcs/apis";
import { TOKEN } from "../funcs/TOKEN";

// 넘겨받은 정보를 show 하는 정도로만 구현
function BoardComp(props) {
    return <div>
        {props.writinglist}
    </div>
}

export default BoardComp;