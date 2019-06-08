import React, { Component, Fragment } from "react";
import "./style.css";

class Blog extends Component {
    render () {
        return (
			<div className="blog-container">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-offset-2"  id="blog">
							<p><img className="image-blog" src="img/perfil.jpeg" width="50px" height="50px"/>
								<ba id="name">William Maia</ba>
							</p>
							<p>
								<bd>Junho, 2019</bd>
							</p>
							<h4 id="h4-blog">MEUS ÁLBUNS MUSICAIS PREFERIDOS</h4>
							<div className= "col-md-2 col-lg-4 album-one">
								<img className="img-responsive" src="img/blog/album1.jpeg" alt=""/>
								<p id="desc"> Em “Ladrão”, seguem presentes alguns temas que o acompanham desde o primeiro trabalho, como a posição antirracista, forte crítica social, a religiosidade – com forte presença no segundo álbum.<br></br> <a href="https://raplogia.com.br/djonga-ladrao/" target="_blank"> Continue...</a></p>
                            </div>

							<div className= "col-md-2 col-lg-4 album-two">
								<img className="img-responsive" src="img/blog/album3.jpg" alt=""/>
								<p id="desc"> O álbum vendeu 1.734.461 cópias, sendo certificado como Diamante triplo pela Associação Brasileira dos Produtores de Discos (hoje Pró-Música). É considerado um dos álbuns mais importantes da história do rap no Brasil. <br></br><a href="https://pt.wikipedia.org/wiki/Rap_%C3%89_Compromisso!" target="_blank"> Continue... </a></p>
                            </div>

							<div className= "col-md-2 col-lg-4 album-three">
								<img className="img-responsive" src="img/blog/album2.jpg" alt=""/>
								<p id="desc">All Eyez on Me é o quarto álbum de estúdio do rapper americano 2Pac (e o último a ser lançado durante sua vida), lançado em 13 de fevereiro de 1996 pela Death Row e pela Interscope Records.<br></br><a href="https://en.wikipedia.org/wiki/All_Eyez_on_Me" target="_blank"> Continue... </a></p>
                            </div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Blog;