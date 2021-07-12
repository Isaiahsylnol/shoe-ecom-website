import React from "react";

function Header() {
  return (
    <div className="header">
      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="#">
                <div>
                  <img
                    width="95"
                    src="../assets/nike-logo.png"
                    alt="Nike logo"
                  />
                </div>
              </a>
            </div>
            <div className="header-right">
              <a href="#">
                {" "}
                <p id="navText">
                  Home
                </p>
              </a>
              <a href="#">
                <p id="navText">
                  Gallery
                </p>
              </a>
              <a href="#">
                <p id="navText">
                  Shop
                </p>
              </a>
              <a href="#">
                <p id="navText">
                  Contact
                </p>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
