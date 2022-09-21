import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@material-ui/core/Button";
export default function Header() {
  return (
    <>
      <div id="Page01">
        <div className="container">
          <div className="title">
            <ul>
              <li>
                <h1>전체</h1>
                <span>총 백만 개 좀 안됨</span>
              </li>
              <li>
                <p>여기에 다 있어요 !</p>
              </li>
            </ul>
          </div>

          <div className="contents">
            <ul className="list">
              <li>
                <img src="images/page01-01" alt="" />
                <div className="contentsTxt"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
