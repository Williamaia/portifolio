import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./style.css";
import { isTemplateElement } from "@babel/types";
/*
const blog = [
	{
		resume: "Em “Ladrão”, seguem presentes alguns temas que o acompanham desde o primeiro trabalho, como a posição antirracista, forte crítica social, a religiosidade – com forte presença no segundo álbum.",
		image: "img/blog/album1.jpeg",
		link: "https://raplogia.com.br/djonga-ladrao/"
	},
	{
		resume: "O álbum vendeu 1.734.461 cópias, sendo certificado como Diamante triplo pela Associação Brasileira dos Produtores de Discos (hoje Pró-Música). É considerado um dos álbuns mais importantes da história do rap no Brasil.",
		image: "img/blog/album3.jpg",
		link: "https://pt.wikipedia.org/wiki/Rap_%C3%89_Compromisso!"
	},
	{
		resume: "All Eyez on Me é o quarto álbum de estúdio do rapper americano 2Pac (e o último a ser lançado durante sua vida), lançado em 13 de fevereiro de 1996 pela Death Row e pela Interscope Records.",
		image: "img/blog/album2.jpg",
		link: "https://en.wikipedia.org/wiki/All_Eyez_on_Me"
	}
]*/

class Blog extends Component {
	constructor(props) {
		super(props) 
		this.state = {infosb: []
		}}
	

	componentDidMount() {
		api.get("/infosb").then(response => {
			this.setState({
				infosb:response.data
			})
		})
	}

	render() {
		return (
			<div className="blog-container">
				<div className="container">
					<div className="row ">
						<div className="col-lg-8 col-lg-offset-2" id="blog">
							<p className="container-img">
								<img className="image-blog" src="img/perfil.jpeg" width="50px" height="50px" />
								<ba id="name">William Maia</ba>
							</p>
							<p> <bd>Junho, 2019</bd> </p>
							<h4 id="h4-blog">MEUS ÁLBUNS MUSICAIS PREFERIDOS</h4>
								
								{
									this.state.infosb && this.state.infosb.map((itemb, index) => {
									return (
										<div className="col-md-2 col-lg-4 album-one" key={index}>
											<img className="img-responsive" src={itemb.image} alt="" />
											<p id="desc">{itemb.resume}</p>
											<p><a href={itemb.link} target="_blank"> Continue...</a></p>
										</div>
									)
									})
								}		
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Blog;