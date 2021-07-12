import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Header from "../src/component/Header";

function App() {
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
    <Router>
      <div className="App">
          <Header />
            <div className="container-fluid p-0">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/cart">
                    <Cart />
                  </Route>
                </Switch>
              </div>
            </div>
    </Router>
  );
}

export default App;
