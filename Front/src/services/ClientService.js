import axios from 'axios';

const Client_API_BASE_URL = "http://127.0.0.1:8081/api/v1/Clients";

class ClientService {

    getClients(){
        return axios.get(Client_API_BASE_URL);
    }

    createClient(Client){
        return axios.post(Client_API_BASE_URL, Client);
    }

    getClientById(ClientId){
        return axios.get(Client_API_BASE_URL + '/' + ClientId);
    }

    updateClient(Client, ClientId){
        return axios.put(Client_API_BASE_URL + '/' + ClientId, Client);
    }

    deleteClient(ClientId){
        return axios.delete(Client_API_BASE_URL + '/' + ClientId);
    }
}

export default new ClientService()