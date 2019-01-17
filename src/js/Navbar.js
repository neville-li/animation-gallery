import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__navbar">
                <li>
                    <a href="#"><FontAwesomeIcon icon="angle-double-left" /></a>
                </li>
                <li>
                    <button onClick={props.toPrevious}><FontAwesomeIcon icon="angle-left" /></button>
                </li>
                <li>
                    <input type="text" maxLength="2" className="nav__navbar__input" placeholder={props.pageNumber}></input><span>/{props.total}</span>
                </li>
                <li>
                    <button onClick={props.toNext}><FontAwesomeIcon icon="angle-right" /></button>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon="angle-double-right" /></a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;