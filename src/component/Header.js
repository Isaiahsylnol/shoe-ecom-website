import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Header() {
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
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/">
                <div>
                  <img
                    width="95"
                    src="../assets/nike-logo.png"
                    alt="Nike logo"
                  />
                </div>
              </Link>
            </div>
            <div className="header-right">
              <a href="#">
                <p id="navText">Home</p>
              </a>
              <a href="#">
                <p id="navText">Gallery</p>
              </a>
              <a href="#">
                <p id="navText">Shop</p>
              </a>
              <a href="#">
                <p id="navText">Contact</p>
              </a>
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
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <Cart />
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
