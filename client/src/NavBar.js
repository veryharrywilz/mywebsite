import React from "react";
import { NavLink } from "react-router-dom"

function NavBar({ user }) {




    return (
        <div>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>

            <NavLink to="/about">
                <button>About</button>
            </NavLink>

            <NavLink to="/contact">
                <button>Contact</button>
            </NavLink>

            <NavLink to="/blog">
                <button>Blog</button>
            </NavLink>

            <NavLink to="/projects">
                <button>Projects</button>
            </NavLink>
            {user === null ?
                <NavLink to="/account">
                    <button>Login</button>
                </NavLink>
                :
                <NavLink to="/account">
                    <button>Profile</button>
                </NavLink>
            }
        </div>
    )
}

export default NavBar;