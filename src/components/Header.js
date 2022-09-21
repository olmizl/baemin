import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@material-ui/core/Button";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const gnbClick = function (e) {
    console.log(e.target);
    setIsActive((isActive) => !isActive);
  };

  return (
    <>
      <header id="header">
        <div className="logo">
          <Link to="/">
            <img src="images/logo.png" alt="logo" />
          </Link>
        </div>

        <nav id="gnb">
          <ul>
            <li className={isActive ? "gnbClick" : " "} onClick={gnbClick}>
              <Link to="/01">전체</Link>
            </li>
            <li className={isActive ? "gnbClick" : " "} onClick={gnbClick}>
              <Link to="/02">문구</Link>
            </li>
            <li>
              {" "}
              <Link to="/03">리빙</Link>
            </li>
            <li>
              {" "}
              <Link to="/04">책/매거진F</Link>
            </li>
            <li>
              {" "}
              <Link to="/05">배민그린</Link>
            </li>
            <li>
              {" "}
              <Link to="/06">배달이친구들</Link>
            </li>
            <li>
              {" "}
              <Link to="/07">콜라보레이션</Link>
            </li>
            <li>
              {" "}
              <Link to="/08">명예의 전당</Link>
            </li>
          </ul>
        </nav>
        <div className="icon">
          {/* <Button varient="contained" color="primary">
            button
          </Button> */}
          <SearchIcon fontSize="large" />
          <ShoppingCartOutlinedIcon fontSize="large" />
          <p className="login">로그인</p>
          <div className="hamBtn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
