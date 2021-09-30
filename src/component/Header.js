import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Header(props) {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="header">
      <header>
        <nav className="navbar navbar-fixed-top navbar-end">
          <div className="container-fluid">
            <div className="navbar-header is-right">
                <div>
                  <img
                    width="95"
                    src="../assets/nike-logo.png"
                    alt="Nike logo"
                  />
                </div>
            </div>
            <div className="is-right">
            <div class='rows'>
      <div class='row is-full'>
      {!props.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>  
                ) : (
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Logout
                  </Link>
                )}
      </div>
      <div class='row is-full'>
      <Link to="/">
                <p id="navText">Home</p>
              </Link>
              <Link to="/">
                <p id="navText">Gallery</p>
              </Link>
              <Link to="/">
                <p id="navText">Shop</p>
              </Link>
              <Link to="/">
                <p id="navText">Contact</p>
              </Link>
              {/* Dropdown cart menu */}
              <div className="dropdown">
                <button onClick={myFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-bag dropbtn"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    { Object.keys(props.state.cart).length }
                  </span>
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <Cart />
                </div>
              </div>
      </div>
    </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
