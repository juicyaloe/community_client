/************************************************
 * SideBar 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

function SideBarComp(props) {
  return (
    <div>
      <ul class="list-group list-group-flush">{props.writinglist}</ul>
    </div>
  );
}

export default SideBarComp;
