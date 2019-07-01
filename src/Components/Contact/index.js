import React, { Component, Fragment } from "react";
import "./style.css"
import api from "../../services/api";

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {contact: {
            title: '',
            subtitle: '',
            message: '',
            email: '',
            redes: '',
            messagerede: ''
        }}
    }

    componentDidMount() {
        api.get('/contact').then(response => {
           this.setState({
                ...response.data[0]
           })
        })
    }


    render() {
        return (
            <div className="contato">
            <div className="container pt" >
                <div className="row-contact"  id="contact">
                    <div className="col-lg-6 col-lg-offset-3 centered">
                        <div id="cont">
                            <h2>{this.state.title}</h2>
                            <h3>{this.state.subtitle}</h3>
                            <p>{this.state.message}</p>
                            <p>{this.state.email}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt">
                    <div className="col-lg-8 col-lg-offset-2">
                        <form className="contact-form" role="form" action="https://formspree.io/williamaiadias@gmail.com" method="POST">
                            <div className="form-group">
                                <input type="name" name="name" className="form-control" id="contact-name" placeholder="Nome" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" id="contact-email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email"/>
                                <div className="validate"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" id="contact-subject" placeholder="Assunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                                <div className="validate"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="contact-message" placeholder="Messagem" rows="5" data-rule="required" data-msg="Please write something for us"></textarea>
                                <div className="validate"/>
                            </div>
                            <div className="loading"/>
                            <div className="error-message"/>
                            <div className="sent-message">Sua mensagem foi enviada, Obrigado!</div>
                            <div className="form-send">
                            <button type="submit" class="btn-form btn">ENVIAR</button>
                            </div>
                        </form>
                        <div id="rede-s">
                            <h4>{this.state.redes}</h4>
                            <p>{this.state.messagerede}</p>
                        </div>
                        
                        <div className="icons">
                        <div className= "col-md-6 col-lg-1 ">
                            <a href="https://github.com/Williamaia" target="_blank">
                                <img id="git" src="./img/icons/git.svg"></img>
                            </a>
                        </div>  
                        <div className= "col-md-6 col-lg-1 ">
                            <a href="https://www.facebook.com/uiil.breezy" target="_blank">
                                <img id="git" src="./img/icons/face.svg"></img>
                            </a>
                        </div>
                        <div className= "col-md-6 col-lg-1 ">
                        <a href="https://www.instagram.com/williamaiadias/" target="_blank">
                            <img id="git" src="./img/icons/insta.svg"></img>
                            </a>
                        </div>
                        <div className= "col-md-6 col-lg-1 ">
                        <a href="https://twitter.com/WilliaMaiaDias" target="_blank">
                            <img id="git" src="./img/icons/tt.svg"></img>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>                            
            </div>
            </div>
        );
    }
}
                             
export default Contact;

