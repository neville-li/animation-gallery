import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    createOptions(){
        let options = [];
        for (let i = 0; i < this.props.total; i++){
            options.push(
                <option key={i} value={i+1}>{i+1}</option>
            );
        }
        return options;
    }

    render(){
        return (
            <nav className="nav">
                <ul className="nav__navbar">
                    <li>
                        <button name="first"
                            className="nav__navbar__button"
                            onClick={e => this.props.changePage(e)}
                            disabled={this.props.pageNumber === 1
                        }>
                            <FontAwesomeIcon icon="angle-double-left" />
                        </button>
                    </li>
                    <li>
                        <button name="previous"
                            className="nav__navbar__button"
                            onClick={e => this.props.changePage(e)}
                            disabled={this.props.pageNumber === 1}
                        >
                            <FontAwesomeIcon icon="angle-left" />
                        </button>
                    </li>
                    <li>
                         <select name="select"
                            value={this.props.pageNumber}
                            onChange={e => this.props.changePage(e)}
                        >
                            { this.createOptions() }
                        </select>
                    </li>
                    <li>
                        <button name="next"
                            className="nav__navbar__button"
                            onClick={e => this.props.changePage(e)}
                            disabled={this.props.pageNumber === this.props.total}
                        >
                            <FontAwesomeIcon icon="angle-right" />
                        </button>
                    </li>
                    <li>
                        <button name="last"
                            className="nav__navbar__button"
                            onClick={e => this.props.changePage(e)}
                            disabled={this.props.pageNumber === this.props.total}
                        >
                            <FontAwesomeIcon icon="angle-double-right" />
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;