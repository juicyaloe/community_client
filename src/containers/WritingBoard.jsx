import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import WritingBoardComp from "../components/WritingBoardComp";

import { postWriting, getPost } from "../funcs/apis";
import moment from "moment";

function WritingBoard(props) {

    var [data, dataFunc] = useState();

    const url = useLocation()
    const urlList = url.pathname.split("/")
    const id = urlList[urlList.length - 2];
    console.log(id);

    // writing/:id 에서 id 얻어오기

    useEffect(function() {
        showWriting(id);
    }, [id]);

    async function showWriting(id) {
        let response = await getPost(id);

        if (response.status !== 404) {
            response.json().then(
                function(data) {

                    let content = 
                        <div>
                            <h2>글 제목: {data.title}</h2>
                            <p>글 내용: {data.content}</p>
                            <p>게시판 종류: {data.board}</p>
                            <p>글 쓴 시각: {data.inittime}</p>
                            <Link to="/board/all/">
                                <button>뒤로가기</button>
                            </Link>
                        </div>
                    dataFunc(content);
                }
            )
        } else {
            console.log("유효하지 않은 id값")
        }
    
        
    }

    return <WritingBoardComp data={data}></WritingBoardComp>
}

export default WritingBoard