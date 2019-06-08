import React, { Component, Fragment } from "react";
import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <div className="container pt" id="portifolio">
                <div className="row mt">
                    <div className="col-lg-6 col-lg-offset-3 centered">
                        <h3>PORTIFÓLIO</h3>
                    </div>
                    <div className="col-lg-6 col-lg-offset-3 centered">
                        <h3>O QUE JÁ FIZ?</h3>
                        <p>Confira alguns dos meus trabalhos na matéria de programação WEB</p>
                    </div>
                </div>
                <div className="row mt centered">
                    <div className="col-lg-4">
                        <a href="work01.html"><img className="img-responsive" src="img/portfolio/portifolio1.png" alt="" /></a>
                        <p>BAZAR</p>
                    </div>
                    <div className="col-lg-4">
                        <a href="work01.html"><img className="img-responsive" src="img/portfolio/portifolio2.png" alt="" /></a>
                        <p>SITE GEOVANNA GARCIA</p>
                    </div>
                    <div className="col-lg-4">
                        <a href="work01.html"><img className="img-responsive" src="img/portfolio/Portifolio3.png" alt="" /></a>
                        <p>LOJA VIRTUAL</p>
                    </div>
                </div>
                <div className="row mt centered">
                    <div className="col-lg-4">
                        <a href="work01.html"><img className="img-responsive" src="img/portfolio/portifolio4.png" alt="" /></a>
                        <p>SVG</p>
                    </div>
                    <div className="col-lg-4">
                        <a href="work01.html"><img className="img-responsive" src="img/portfolio/portifolio5.png" alt="" /></a>
                        <p>SITE PESSOAL</p>
                    </div>
                    <div className="col-lg-4">
                        <a href="work01.html"><img className="img-responsive" src="img/portfolio/portifolio6.png" alt="" /></a>
                        <p>FLEX</p>
                    </div>
                    <div className= "col-lg-4">
                        <button type="button" class="btn-port btn">TRABALHOS COMPLETO</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;