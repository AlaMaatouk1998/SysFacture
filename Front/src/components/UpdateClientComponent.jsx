import React, { Component } from 'react'
import ClientService from '../services/ClientService';

class UpdateClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nomClient: '',
            telClient: '',
            emailClient: '',
            adresse : ' ',
        }
        this.changenomClientHandler = this.changenomClientHandler.bind(this);
        this.changetelClientHandler = this.changetelClientHandler.bind(this);
        this.changeemailClientHandler = this.changeemailClientHandler.bind(this);
        this.changeadresseHandler = this.changeadresseHandler.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }

    componentDidMount(){
        ClientService.getClientById(this.state.id).then( (res) =>{
            let Client = res.data;
            console.log(res.data);
            this.setState({nomClient: Client.nomClient,
                telClient: Client.telClient,
                emailClient : Client.emailClient,
                adresse : Client.adresse

            });

        });
        console.log(this.state)
    }

    updateClient = (e) => {
        e.preventDefault();
        let Client = {nomClient: this.state.nomClient, telClient: this.state.telClient, emailClient: this.state.emailClient,adresse: this.state.adresse};
        console.log('Client => ' + JSON.stringify(Client));
        console.log('id => ' + JSON.stringify(this.state.id));
        ClientService.updateClient(Client, this.state.id).then( res => {
            this.props.history.push('/Clients');
        });
    }
    
    changeemailClientHandler= (event) => {
        this.setState({emailClient: event.target.value});
    }
    changenomClientHandler= (event) => {
        this.setState({nomClient: event.target.value});
    }

    changetelClientHandler= (event) => {
        this.setState({telClient: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({emailClient: event.target.value});
    }
    changeadresseHandler= (event) => {
        this.setState({adresse: event.target.value});
    }

    cancel(){
        this.props.history.push('/Clients');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Client</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom de Client:  </label>
                                            <input  name="nomClient" className="form-control" 
                                                defaultValue={this.state.nomClient} onChange={this.changenomClientHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telephone:  </label>
                                            <input placeholder="Last Name" name="telClient" className="form-control" 
                                                value={this.state.telClient} onChange={this.changetelClientHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email de Client: </label>
                                            <input placeholder="Email Address" name="emailClient" className="form-control" 
                                                value={this.state.emailClient} onChange={this.changeemailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Adresse de Client:  </label>
                                            <input placeholder="Email Address" name="adresse" className="form-control" 
                                                value={this.state.adresse} onChange={this.changeadresseHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateClient}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateClientComponent
