import React from "react";

const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__navbar">
                <li>
                    <a href="#">First</a>
                </li>
                <li>
                    <a href="#">Previous</a>
                </li>
                <li>
                    <input type="text" maxLength="2"className="nav__navbar__input" placeholder={props.pageNumber}></input><span>/100</span>
                </li>
                <li>
                    <a href="#">Next</a>
                </li>
                <li>
                    <a href="#">Last</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;