/************************************************
 * 서버 관련 함수 정의
 *
 *
 *************************************************/

//var address = "http://13.124.202.172/";
var address = "http://minmac.kro.kr/";

// 게시글을 불러오는 함수
export async function getWriting(option) {
  var data;
  await fetch(address + "api/writing/" + option)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      data = json;
    });
  return data;
}

// 게시글 쓰는 함수
export async function postWriting(token, option, _title, _content) {

  var data;
  await fetch(address + "api/writing/" + option,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({
      title: _title,
      content: _content
    })
  }).then((response) => data = response)
  // response.status
  // resposne.json()

  return data;
}

export async function login(_id, _password) {
  var data;
  await fetch(address + "api/users/login/",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: _id,
      password: _password
    })
  }).then((response) => data = response)
  // response.status
  // resposne.json()

  return data;
}