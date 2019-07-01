import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./style.css";

	/*
const portifolio = [
	{
		image: "img/portfolio/bazar.png",
		title: "BAZAR",
		link: "work01.html"
	},
	{
		image: "img/portfolio/geovanna.png",
		title: "SITE GEOVANNA GARCIA",
		link: "work01.html"
	},
	{
		image: "img/portfolio/loja.png",
		title: "LOJA VIRTUAL",
		link: "work01.html"
	},
	{
		image: "img/portfolio/svg.png",
		title: "SVG",
		link: "work01.html"
	},
	{
		image: "img/portfolio/sitepessoal.png",
		title: "SITE PESSOAL",
		link: "work01.html"
	},
	{
		image: "img/portfolio/flex.png",
		title: "FLEX",
		link: "work01.html"
	}

]
*/

class Portfolio extends Component {
	constructor(props) {
		super(props) 
		this.state = {portifolio: []
		}}
	

	componentDidMount() {
		api.get("/portifolio").then(response => {
			this.setState({
				portifolio:response.data
			})
		})
	}

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
				<div className="col-lg-12 centered container-portifolio">
					{
						this.state.portifolio && this.state.portifolio.map((item, index) => {
							return (
								<div className="item-portifolio" key={index}>
									<a href={item.link}><img className="img-responsive" src={item.image} alt="" /></a>
									<p>{item.title}</p>
								</div>
							)
						})
					}
				</div>
				<div className="col-lg-6 col-lg-offset-3 centered">
					<p><a href="https://github.com/Williamaia?tab=repositories" target="_blank"><button type="button" className="btn-port btn">TRABALHOS COMPLETO</button></a></p>
				</div>
				
			</div>
		);
	}
}

export default Portfolio;