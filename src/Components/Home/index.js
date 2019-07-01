import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./style.css";

/*
const sobre = {
	nome: "William Maia",
	resume: "Front End Web Developer, nasci em Feira de Santana - BA, atualmente morando em Nova Fátima – PR.",
	blurb: [
		{
			title: "INTERESSES",
			blurbitem: [
				"Desenvolvimento Web",
				"Desenvolvimento Mobile"
			]
		},
		{
			title: "IDIOMAS",
			blurbitem: [
				"Português - Nativo",
				"Inglês - Básico"
			]
		},
		{
			title: "FORMAÇÃO",
			blurbitem: [
				"Tecnologia em Análise e Desenvolvimento de Sistemas - 2016/2019 UTFPR"
			]
		},
		{
			title: "ATIVIDADES",
			blurbitem: [
				"Desenvolvimento Front-End",
				"Programação para LEGO MINDSTORM"
			]
		}

	]
}
*/

class Sobre extends Component {
	constructor(props) {
		super(props) 
		this.state = {home: [], infos: [],
		}}
	

		async componentDidMount(){
			const home = await api.get('/home');
			const infos = await api.get('/infos');
			this.setState({
				home: home.data[0],
				infos: infos.data
			})
		}

	render() {
		return (
			<div id="ww">
				<div className="container">
					<div className="row-home">
						<div className="col-lg-8 col-lg-offset-2 centered">
						<img id="img-perfil" src={this.state.home.photograph} alt="William"/>
							<h1>{this.state.home.name}!</h1>
							<p className="resume">{this.state.home.about}</p>
							{
						    this.state.infos && this.state.infos.map((item, index) => {
									return (
										<div className="col-md-6 col-lg-6" key={index}>
											<h4>{item.title}</h4>
											<ul>
												{item.infoone && <li>{item.infoone}</li>}
												{item.infotwo && <li>{item.infotwo}</li>}
											</ul>
										</div>
									)
								})
							}

							<div className="col-lg-8 col-lg-offset-2 centered">
								<a href={this.state.home.curriculum} target="_blank"><button type="button" class="btn-home btn">CURRÍCULO COMPLETO</button></a>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Sobre;
