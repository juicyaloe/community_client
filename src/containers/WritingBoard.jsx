import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WritingBoardComp from "../components/WritingBoardComp";
import { Provider, useSelector, useDispatch } from "react-redux";

import { postWriting, getPost, postComment } from "../funcs/apis";
import moment from "moment";
import { boardList, BOARDINDEX, BOARDLIST, BOARDNAME } from "../funcs/boardManage";

function showComment(comments) {

    let commentList = []

    for (var i = 0; i < comments.length; i++)
    {
        let data = comments[i]
        let temp = <div key={i} class="card mt-1">
        <div class="card-body">
          <div class="container row">    
            <div class="card-subtitle text-muted text-start col-9" style={{fontSize:"15px"}}><h4 style={{display: 'inline'}}>{data.writer}:&nbsp;&nbsp;</h4>{data.content}</div>
          </div>
        </div>
      </div>

      commentList.push(temp);
    }

    return commentList;
}

function WritingBoard(props) {

    var [data, dataFunc] = useState();
    var boardIdx = useSelector((state) => state.currentIdx);
    const token = useSelector((state) =>state.token);

    const url = useLocation()
    const urlList = url.pathname.split("/")
    const id = urlList[urlList.length - 2];
    var reload = 1;

    // writing/:id 에서 id 얻어오기

    var [isLike, isLikeFunc] = useState(false);

    useEffect(function() {
        showWriting(id);
    }, [id], [reload]);

    async function showWriting(id) {
        let response = await getPost(id);

        if (response.status === 200) {
            response.json().then(
                function(data) {
                    var moment = require('moment');
                            const date = moment(data.inittime).format("YYYY.MM.DD.HH.mm.ss");
                            const timeGap = moment(date, 'YYYY.MM.DD.HH.mm.ss').fromNow();
                            let content = 
                                <div>
                                    <div class="card-header text-start bg-white" style={{fontSize:"20px"}}>{BOARDNAME[data.board]} 게시판</div><br/>
                                    <div class="row">
                                        <img class="col-sm-1 figure-img " src="/profileimg.png" style={{height:"60px", width:"80px"}}></img>
                                        <div class="col-sm-10">
                                            <div class="row ">
                                                <b class=" col-12 m-0 p-0 text-start" style={{"fontSize":"20px"}}>{data.writer}</b><br/>
                                                <p class="col-12 p-0 text-start ">{timeGap}</p> 
                                            </div>
                                        </div>
                                    </div>
                                    <b class="col-12 text-start float-start m-2" style={{fontSize:"25px"}}>{data.title}</b>
                                    <p class="m-3" style={{textAlign: "left"}}>{data.content}</p>
                                    
                                    
                                    {showComment(data.comments).length !== 0 ? showComment(data.comments) :
                                    <p>달린 댓글이 없습니다.</p>}

                                    {/* 테스트 코드 */}
                                    <button onClick={
                                        async function() {
                                            let response = await postComment(token, id, "댓글 달기 테스트")
                                            console.log(response);
                                            showWriting(id);
                                        }
                                    }>댓글 달기 테스트 버튼</button>

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
    let result = <div class="card p-3">{data}
    {isLike ? 
        <img class="ms-2 p-0" src="/likeimg.png" style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={()=> {isLikeFunc(false); console.log(isLike)}}></img> : 
        <img class="ms-2 p-0" src="/dislikeimg.png" style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={()=> {isLikeFunc(true); console.log(isLike)}}></img>
    }
    </div>
    return <WritingBoardComp data={result}></WritingBoardComp>;
}      

export default WritingBoard;
