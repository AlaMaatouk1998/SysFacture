import React, { Component } from 'react'
import ClientService from '../services/ClientService';

class CreateClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
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
        
        this.saveClient = this.saveClient.bind(this);
    }
    

    // step 3
    
    saveClient = (e) => {
        e.preventDefault();
        let Client = {nomClient: this.state.nomClient, telClient: this.state.telClient, emailClient: this.state.emailClient,adresse: this.state.adresse};
console.log(Client)
        // step 5
            ClientService.createClient(Client).then(res =>{
                this.props.history.push('/Clients');
            });
        
    }
    
    changenomClientHandler= (event) => {
        this.setState({nomClient: event.target.value});
    }

    changetelClientHandler= (event) => {
        this.setState({telClient: event.target.value});
    }

    changeemailClientHandler= (event) => {
        this.setState({emailClient: event.target.value});
    }
    changeadresseHandler = (event) => 
    { this.setState ({adresse: event.target.value}) ; } 


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
                            <h2>Ajouter Client</h2>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom Client </label>
                                            <input placeholder="Nom Client" name="nomClient" className="form-control" 
                                                value={this.state.nomClient} onChange={this.changenomClientHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telephone Client </label>
                                            <input placeholder="Telephone Client" name="telClient" className="form-control" 
                                                value={this.state.telClient} onChange={this.changetelClientHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Client: </label>
                                            <input placeholder="Email Address" name="emailClient" className="form-control" 
                                                value={this.state.emailClient} onChange={this.changeemailClientHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adresse Client: </label>
                                            <input placeholder="adresse Client" name="adresse" className="form-control" 
                                                value={this.state.adresse} onChange={this.changeadresseHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveClient}>Save</button>
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

export default CreateClientComponent
