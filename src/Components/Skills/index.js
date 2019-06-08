import React, { Component, Fragment } from "react";
import "./style.css";

class Skills extends Component {
    render() {
        return (
			<div className="col-lg-12 skills" id="skills">
				<h2>SKILLS</h2> 
				<h4>HTML + CSS</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 800}}>
					<span className="sr-only">60% Complete</span>
				</div>
			</div>
				<h4>JAVASCRIPT</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 380}}>
					<span className="sr-only">80% Complete</span>
				</div>
			</div>
				<h4>JAVA</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 400}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
				<h4>C++</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 700}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
				<h4>LINUX</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 500}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
				<h4>SQL</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 900}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
				<h4>SUBLIMETEXT</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 300}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
				<h4>REACT</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 200}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
				<h4>MONGODB</h4>
			<div className="progress">
				<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 150}}>
					<span className="sr-only">95% Complete</span>
				</div>
			</div>
		</div>
	
        );
    }
}

export default Skills;