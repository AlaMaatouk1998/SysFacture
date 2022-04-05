import React, { Component } from 'react'
import ClientService from '../services/ClientService'

class ViewClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Client: {}
        }
    }

    componentDidMount(){
        ClientService.getClientById(this.state.id).then( res => {
            this.setState({Client: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Client Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nom de Client: </label>
                            <div class="marge"> { this.state.Client.nomClient }</div>
                        </div>
                        <div className = "row">
                            <label> Client Telephone: </label>
                            <div class="marge"> { this.state.Client.telClient }</div>
                        </div>
                        <div className = "row">
                            <label> Client email: </label>
                            <div class="marge"> { this.state.Client.emailClient }</div>
                        </div>
                        <div className = "row">
                            <label> Client Adresse: </label>
                            <div class="marge">  { this.state.Client.adresse }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewClientComponent
