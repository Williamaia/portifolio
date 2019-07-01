import React, { Component, Fragment } from "react";
import api from "../../services/api";

class Sobre extends Component {
    constructor(props) {
        super(props) 
        this.state = {sobre: []  
        }
    }
    componentDidMount() {
        api.get('/sobre').then(response => {
            this.setState({
                sobre: response.data
            })
        })
    }

    render() {
        return (
            <div id="ww">
                <div className="container-about">
                    <div className="row" id="infos">
                    {
                        this.state.sobre && this.state.sobre.map((sob, index) => {
                            return (
                                <>
                               
                                <div className="col-lg-8  col-lg-offset-2 centered one" key={index}>
                                   {sob.subtitlebio && <h4>{sob.subtitlebio}</h4>}
                                    {sob.biografia && <p>{sob.biografia}</p>}
                                </div>

                                <div className="col-lg-8  col-lg-offset-2 centered" key={index}>
                                {sob.subtitleprof && <h4>{sob.subtitleprof}</h4>}
                                {sob.profissao && <p>{sob.profissao}</p>}
                                </div>
                                </>
                            )
                        }
                        )
                    }
                    </div>
                 </div>
            </div>
            );
        }
    }
        
export default Sobre;