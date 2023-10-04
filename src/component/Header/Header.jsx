import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom';
import { ImSearch } from "react-icons/im"
function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" />
                <div>
                    <Link to="/">TVShows</Link>
                    <Link to="/Movies">Movies</Link>
                    <Link to="/Recently added">Recently added</Link>
                    <Link to="/My List">My List</Link>
                </div>
                <ImSearch />
            </div>
        </>
    )
}

export default Header