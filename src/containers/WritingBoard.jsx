import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WritingBoardComp from "../components/WritingBoardComp";
import { Provider, useSelector, useDispatch } from "react-redux";

import { postWriting, getPost } from "../funcs/apis";
import moment from "moment";
import { boardList, BOARDINDEX, BOARDLIST, BOARDNAME } from "../funcs/boardManage";

function WritingBoard(props) {

    var [data, dataFunc] = useState();
    var boardIdx = useSelector((state) => state.currentIdx);

    const url = useLocation()
    const urlList = url.pathname.split("/")
    const id = urlList[urlList.length - 2];

    // writing/:id 에서 id 얻어오기

    useEffect(function() {
        showWriting(id);
    }, [id]);

    async function showWriting(id) {
        let response = await getPost(id);

        if (response.status === 200) {
            response.json().then(
                function(data) {
                    var moment = require('moment');
                    const date = moment(data.inittime).format("YYYY년 MM월 DD일 HH시 mm분 ss초");

                    let content = 
                        <div>
                            <h2 style={{textAlign: "left"}}>글 제목: {data.title}</h2><br/><br/>
                            <p style={{textAlign: "left"}}>글 내용: {data.content}</p><br/>
                            <p style={{textAlign: "left"}}> 게시판 종류: {BOARDNAME[data.board]}</p><br/>
                            <p style={{textAlign: "left"}}>글 쓴 시각: {date}</p>
                            <Link to={"/board/" + boardList[boardIdx][BOARDINDEX.URL]}>
                                <button class="btn btn-warning">뒤로가기</button>
                            </Link>
                        </div>
                    dataFunc(content);
                }
            )
        } else {
            console.log("유효하지 않은 id값")
        }
    }
    
  return <WritingBoardComp data={data}></WritingBoardComp>;
}      

export default WritingBoard;
