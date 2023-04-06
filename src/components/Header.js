import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error("log out error", error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          AwesomeUI
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        {user?.email ? (
          <button onClick={logOutHandler} className="btn btn-sm">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
