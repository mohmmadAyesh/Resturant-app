import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import {
  NavBar,
  List,
  Button,
  LoginButton,
  SignupButton,
} from "./navbar.style.js";
const Navbar = () => {
  const locator = useLocation();
  const { pathname } = locator;
  const { user, logout } = useContext(AuthContext);
  const False = false;
  return (
    <>
      {!(pathname === "/login" || pathname === "/signup") ? (
        <NavBar>
          <List>
            <div>
              <li>
                <Link
                  style={{ color: "#FAFAFA", textDecoration: "none" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link
                      style={{ color: "#FAFAFA", textDecoration: "none" }}
                      to="/Menu"
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ color: "#FAFAFA", textDecoration: "none" }}
                      to="/Profile"
                    >
                      Profile
                    </Link>
                  </li>
                </>
              )}
            </div>
            {!user ? (
              <div>
                <li>
                  <LoginButton>
                    <Link
                      style={{ color: "#FAFAFA", textDecoration: "none" }}
                      to="/login"
                    >
                      Login
                    </Link>
                  </LoginButton>
                </li>
                <li>
                  <SignupButton>
                    <Link
                      style={{ color: "#FAFAFA", textDecoration: "none" }}
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </SignupButton>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Button>
                    <Link
                      style={{ color: "#fafafa", textDecoration: "none" }}
                      to="/"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </Button>
                </li>
              </div>
            )}
          </List>
        </NavBar>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
