import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/956/198/original/netflix-transparent-netflix-free-free-png.png"
            alt=""
            width={110}
          />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movie</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie management</Link>
          </li>
          <li>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
