import React, { Component, Fragment } from "react";
import Nav from "../../Components/Nav"
import Portfolio from "../../Components/Portifolio";
import Sobre from "../../Components/Sobre";
import Skills from "../../Components/Skills";
import Home from "../../Components/Home";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Blog from "../../Components/Blog";


class Main extends Component {
    render() {
        return (
            <Fragment>
                <Nav></Nav>
                <Home></Home>
                <Portfolio></Portfolio>
                <Sobre></Sobre>
                <Skills></Skills>
                <Blog></Blog>
                <Contact></Contact>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default Main;