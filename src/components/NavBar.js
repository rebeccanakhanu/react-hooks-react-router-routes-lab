import React from "react";
import { NavLink } from "react-router-dom";

const linkstyles = {
  display: "flex",
  flexDirection:"column",
  width:"100%",
  padding: "14px",
  background: "transparent",
  colour:"blue",
}
function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkstyles} activeStyle={{
        background: "blue",
      }}
      >
        Home
      </NavLink>

      <NavLink to="/movies" exact style ={linkstyles} activeStyle={{
        background: "blue",
      }}
      >
        Movies
      </NavLink>

      <NavLink to="/directors" exact style={linkstyles}activeStyle={{
        background: "dark blue",
      }}
      >
        Directors
      </NavLink>

      <NavLink to="/actors" exact style={linkstyles} activeStyle={{
        background:"blue",
        }}
        >
        Actors
      </NavLink>
      </div>
  );
}
export default NavBar;