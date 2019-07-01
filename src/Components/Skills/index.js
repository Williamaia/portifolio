import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./style.css";

class Skills extends Component {
	constructor(props) {
		super(props) 
		this.state = {skills: []
		}
	}
	

	componentDidMount() {
		api.get("/skills").then(response => {
			this.setState({
				skills:response.data
			})
		})
	}

    render() {
        return (
			<div className="col-lg-12 skills" id="skills">
				<h2>SKILLS</h2> 	
					{
						this.state.skills && this.state.skills.map((skill, index) => {
							return (
								<div className="item-skills" key={index}>
									<h4>{skill.title}</h4>
									<div className="progress">
										<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: skill.porcentagem*10}}>
											<span className="sr-only">{skill.porcentagem}%</span>
										</div>
									</div>
								</div>
							)
						})
					}
			</div>
	
        );
    }
}

export default Skills;