package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Client;

public interface ClientService {
	Client saveClient(Client c);
	Client updateClient(Client c);
	void deleteClient(Client c);
	void deleteClientById(Long id);
	Client getClient(Long id);
	List<Client> getAllClients();

}
