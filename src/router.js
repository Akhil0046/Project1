import {  BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";




export const routings = (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
        <li className="nav-item">
            <NavLink className="nav-link text-dark" to="/register" >
           Create A account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="/login" >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <Switch>  
    <Route path="/login" component={Login}  />
    <Route path="/register" component={Register}  />

    </Switch>
  </BrowserRouter>
);