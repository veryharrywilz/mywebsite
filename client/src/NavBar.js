import React from "react";
import { NavLink } from "react-router-dom"

function NavBar({ user }) {




    return (
        <div className="navBar">
            <NavLink to="/">
                <button className="navBarButton">Home</button>
            </NavLink>

            <NavLink to="/about">
                <button className="navBarButton">About</button>
            </NavLink>

            <NavLink to="/contact">
                <button className="navBarButton">Contact</button>
            </NavLink>

            <NavLink to="/blog">
                <button className="navBarButton">Blog</button>
            </NavLink>

            <NavLink to="/projects">
                <button className="navBarButton">Projects</button>
            </NavLink>
            {user === null ?
                <NavLink to="/account">
                    <button className="navBarButton">Login</button>
                </NavLink>
                :
                <NavLink to="/account">
                    <button className="navBarButton">Profile</button>
                </NavLink>
            }
        </div>
    )
}

export default NavBar;