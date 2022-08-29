/************************************************
 * Footer 연결
 *
 *
 *************************************************/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Search } from "../funcs/Search";
import { getBoardList } from "../funcs/boardManage";

function FooterComp(props) {
  var searchValue;

  var boardList = getBoardList();
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="d-flex" role="search">
          <input
            onChange={(e) => (searchValue = e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={() => Search(searchValue)}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default FooterComp;
