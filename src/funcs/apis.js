/************************************************
 * 서버 관련 함수 정의
 * 
 * 
*************************************************/

var address = "http://13.124.202.172/"

// 게시글을 불러오는 함수
export async function getWriting() {
    var data;
    await fetch(address + "api/")
      .then(function (response) {return response.json();})
      .then(function (json) { data = json; });
    return data;
}

// 게시글 쓰는 함수(아직 구현 미완)
export async function postWriting() {
    var data;
    await fetch(address + "api/", {
        method: "POST",
        body: new URLSearchParams({
            title: 'post',
            content: 'post',
        }),
    })
    .then((response) => console.log(response.json()))
    // .then((result) => console.log(result));
      
    return data;
}