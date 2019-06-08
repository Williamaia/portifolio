import React, { Component, Fragment } from "react";
import "./style.css"

class Contact extends Component {
    render() {
        return (
            <div className="contato">
            <div className="container pt" >
                <div className="row mt"  id="contact">
                    <div className="col-lg-6 col-lg-offset-3 centered">
                        <h2>CONTATO</h2>
                        <h3>ENTRE EM CONTATO</h3>
                        <p>Entre em contato comigo pelo formulário ou pelo e-mail <br></br> williamaiadias@gmail.com.</p>
                    </div>
                </div>
                <div className="row mt">
                    <div className="col-lg-8 col-lg-offset-2">
                        <form className="contact-form php-mail-form" role="form" action="contactform/contactform.php" method="POST">
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
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                            <div className="form-send">
                            <button type="button" class="btn-form btn">ENVIAR</button>
                            </div>
                        </form>
                        <h4>REDES SOCIAIS</h4>
                        <p>Entrem em contato comigo por minhas redes sociais.</p>
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