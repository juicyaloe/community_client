import React from "react";

// 넘겨받은 정보를 show 하는 정도로만 구현
function MenuComp(props) {
    return <input type="button" onClick={() => props.onClick()} value="Button"></input>
}

export default MenuComp;