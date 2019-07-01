import React, { Component } from "react";
import api from "../../services/api";


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {footer: {
            name: '',
            job: '',
            email: '',
            tel: ''
        }}
    }

    componentDidMount() {
        api.get('/Footer').then(response => {
            this.setState({
                ...response.data[0]
            })
        })
    }

    render () {
        return (     
            <div id="copyrights">
                <div className="container">
                    <p><strong>{this.state.name}</strong> {this.state.job}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.tel}</p>
                </div>
            </div>
        );
    }
}

export default Footer;