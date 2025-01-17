import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="addUser">
      <h3>Sign In</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
          />

          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <div className="login">
            <p>Dont have adn account?</p>
            <Link to="/" type="submit" class="btn btn-success">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
