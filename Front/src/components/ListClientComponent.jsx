import React, { Component } from 'react'
import ClientService from '../services/ClientService'

class ListClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Clients: []
        }
        this.addClient = this.addClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    deleteClient(id){
        ClientService.deleteClient(id).then( res => {
            this.setState({Clients: this.state.Clients.filter(Client => Client.idClient !== id)});
        });
    }
    viewClient(id){
        this.props.history.push(`/view-Client/${id}`);
    }
    editClient(id){
        this.props.history.push(`/update-Client/${id}`);
    }

    componentDidMount(){
        ClientService.getClients().then((res) => {
            this.setState({ Clients: res.data});
        });
    }

    addClient(){
        this.props.history.push('/add-Client');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Clients List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addClient}> Add Client</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nom</th>
                                    <th> Telephone</th>
                                    <th> Email </th>
                                    <th> Adresse </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Clients.map(
                                        Client => 
                                        <tr key = {Client.idClient}>
                                             <td> { Client.nomClient} </td>   
                                             <td> {Client.telClient}</td>
                                             <td> {Client.emailClient}</td>
                                             <td> {Client.adresse}</td>
                                             <td>
                                                 <button onClick={ () => this.editClient(Client.idClient)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteClient(Client.idClient)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewClient(Client.idClient)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListClientComponent
