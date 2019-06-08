import React, { Component, Fragment } from "react";
import "./style.css";

class Sobre extends Component {
    render() {
        return (
            <div id="ww">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 centered">
                            <img id="img-perfil" src="img/perfil.jpeg" alt="William"/>
                                <h1>Olá, Eu sou William Maia!</h1>
                                <p>Front End Web Developer, nasci em Feira de Santana - BA, atualmente morando em Nova Fátima – PR.</p> 
                                <div className= "col-md-6 col-lg-6">
                                    <h4>INTERESSES</h4>
                                    <ul>
                                        <li>Desenvolvimento Web</li>
                                        <li>Desenvolvimento Mobile</li>
                                    </ul>
                                </div>

                                <div className= "col-md-6 col-lg-6">
                                    <h4>IDIOMAS</h4>
                                    <ul>
                                        <li>Português - Nativo</li>
                                        <li>Inglês - Básico</li>
                                    </ul>
                                </div>

                                <div className= "col-md-6 col-lg-6">
                                    <h4>FORMAÇÃO</h4>
                                    <ul>
                                        <li>Tecnologia em Análise e Desenvolvimento de Sistemas - 2016/2019 UTFPR</li>
                                    </ul>
                                </div>

                                <div className= "col-md-6 col-lg-6">
                                    <h4>ATIVIDADES</h4>
                                    <ul>
                                        <li>Desenvolvimento Front-End</li>
                                        <li>Programação para LEGO MINDSTORM</li>
                                    </ul>
                                </div>
                                
                                <div className= "col-lg-8 col-lg-offset-2 centered">
                                    <button type="button" class="btn-home btn">CURRÍCULO COMPLETO</button>
                                </div>  
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Sobre;