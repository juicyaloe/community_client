import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import WritingBoardComp from "../components/WritingBoardComp";

import { postWriting, getPost } from "../funcs/apis";

function WritingBoard(props) {

    var [data, dataFunc] = useState();

    const url = useLocation()
    const urlList = url.pathname.split("/")
    const id = urlList[urlList.length - 2];
    console.log(id);

    // writing/:id 에서 id 얻어오기

    useEffect(function() {
        showWriting(id);
    });

    async function showWriting(id) {
        let data = await getPost(id);
    
        let content = <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <strong>{data.board} {data.inittime}</strong>
        </div>
        dataFunc(content);
    }

    return <WritingBoardComp data={data}></WritingBoardComp>
}

export default WritingBoard