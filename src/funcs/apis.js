/************************************************
 * 서버 관련 함수 정의
 *
 *
 *************************************************/

//var address = "http://13.124.202.172/";
var address = "http://minmac.kro.kr/";

// 게시글을 불러오는 함수
export async function getWriting(option) {
  var response;
  await fetch(address + "api/writing/" + option)
    .then(function (_response) {
      response = _response;
    });

  return response;
}

// 게시글 쓰는 함수
export async function postWriting(token, option, _title, _content) {

  var response;
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
  }).then((_response) => response = _response)
  // response.status
  // resposne.json()

  return response;
}

export async function login(_id, _password) {
  var response;
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
  }).then((_response) => response = _response)
  // response.status
  // resposne.json()

  return response;
}

export async function getPost(id) {
  var response;
  await fetch(address + "api/writing/" + id + "/")
    .then(function (_response) {
      response = _response
    });

  return response;
}

export async function postComment(token, post_id, content) {
  var response;
  await fetch(address + "api/comment/all/",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({
      post_id: post_id,
      content: content
    })
  }).then((_response) => response = _response)
  // response.status
  // resposne.json()

  return response;
}

export async function register(id, password, email) {
  var response;
  await fetch(address + "api/users/register/",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: id,
      password: password,
      password2: password,
      email: email
    })
  }).then((_response) => response = _response)
  // response.status
  // resposne.json()

  return response;
}