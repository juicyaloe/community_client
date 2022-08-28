var address = "http://13.124.202.172/"

export default async function getWriting() {
    var data;
    await fetch(address + "api/")
      .then(function (response) {return response.json();})
      .then(function (json) { data = json; }.bind(this));
    return data;
}

export async function postWriting() {
    var data;
    await fetch(address + "api/", {
        method: "POST",
        body: new URLSearchParams({
            title: 'a1',
            content: 'b1',
        }),
    })
    .then((response) => console.log(response.json()))
    // .then((result) => console.log(result));
      
    return data;
}