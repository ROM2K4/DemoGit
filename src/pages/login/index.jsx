import { Link } from "react-router-dom";
import Header from "../../components/header";
import "./index.scss";

function Login() {
  return (
    <div className="login">
      <Header />
      <div className="wrapper">
        <div className="login__logo">
          <Link to="/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/956/198/original/netflix-transparent-netflix-free-free-png.png"
              alt=""
              width={110}
            />
          </Link>
        </div>

        <div className="line"></div>

        <div className="login__form">
          <h3>Log in</h3>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
