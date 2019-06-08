import React, { Component, Fragment } from "react";
import "./style.css"

class Nav extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">WILLIAM</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#ww">Home</a></li>
                            <li><a href="#portifolio">Portifólio</a></li>
                            <li><a href="#infos">Infos</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;