import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="addUser">
      <h3>Sign Up</h3>
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
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your password"
          />
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
          <div className="login">
            <p>Already have adn account</p>
            <Link to="/login" type="submit" class="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
