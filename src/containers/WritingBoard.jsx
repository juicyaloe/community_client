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
        var moment = require('moment');
        const date = moment(data.inittime).format("YYYY.MM.DD.HH.mm.ss");
        const timeGap = moment(date, 'YYYY.MM.DD.HH.mm.ss').fromNow();

        let temp =
        
            <li class="list-group-item text-start">
                <div class="row">
                    <h6 class="mt-1 mb-1">{data.writer}</h6>
                    <div class="text-muted " style={{fontSize:"16px"}}>{data.content}</div>
                    <div class="text-muted float-end" style={{fontSize:"12px"}}>{timeGap}</div>
                </div>
            </li>
        
            // <div class="card-subtitle text-muted text-start col-9" style={{fontSize:"15px"}}><h4 style={{display: 'inline'}}>{data.writer}:&nbsp;&nbsp;</h4>{data.content}</div>

      commentList.push(temp);
    }

    return <div class="card"><ul class="list-group list-group-flush">{commentList}</ul></div>;
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
    const [comment, commentFunc] = useState("");

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

                                    

                                </div>


                    dataFunc(content);
                        
                            
                }
            )                   
        } else {
            console.log("유효하지 않은 id값")
        }
    }
    let result = <div class="card p-3">{data}

    <div class="input-group mb-3 mt-4">
        <input type="text" class="form-control ps-3" placeholder="댓글을 입력하세요" onChange={(e)=>commentFunc(e.target.value)} value={comment}/>
        <button class="btn btn-outline-secondary" type="button" onClick={
            async function() {
                let response = await postComment(token, id, comment === "" ? "내용 없음": comment);
                
                console.log(response);
                showWriting(id);
                commentFunc("");
            }
        }>댓글 달기</button>
    </div>
    <div>
        {isLike ? 
            <img class="ms-2 p-0 float-start" src="/likeimg.png" style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={()=> {isLikeFunc(false); console.log(isLike)}}></img> : 
            <img class="ms-2 p-0 float-start" src="/dislikeimg.png" style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={()=> {isLikeFunc(true); console.log(isLike)}}></img>
        }
        <Link to={"/board/" + boardList[boardIdx][BOARDINDEX.URL]}>
            <button class="btn btn-warning float-end">뒤로가기</button>
        </Link>
    </div>
    </div>
    return <WritingBoardComp data={result}></WritingBoardComp>;
}      

export default WritingBoard;
