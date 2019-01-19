import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__navbar">
                <li>
                    <button onClick={props.toFirst} disabled={props.pageNumber === 1}>
                        <FontAwesomeIcon icon="angle-double-left" />
                    </button>
                </li>
                <li>
                    <button onClick={props.toPrevious} disabled={props.pageNumber === 1}>
                        <FontAwesomeIcon icon="angle-left" />
                    </button>
                </li>
                <li>
                    <input type="text" maxLength="2" className="nav__navbar__input" placeholder={props.pageNumber}></input><span>/{props.total}</span>
                </li>
                <li>
                    <button onClick={props.toNext} disabled={props.pageNumber === props.total}>
                        <FontAwesomeIcon icon="angle-right" />
                    </button>
                </li>
                <li>
                    <button onClick={props.toLast} disabled={props.pageNumber === props.total}>
                        <FontAwesomeIcon icon="angle-double-right" />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;