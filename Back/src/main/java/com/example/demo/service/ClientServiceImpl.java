package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.service.ClientService;
import com.example.demo.entity.Client;
import com.example.demo.repository.ClientRepository;
@Service
public class ClientServiceImpl implements ClientService{

	@Autowired
	ClientRepository ClientRepository;
	
	@Override
	public Client saveClient(Client c) {
		return ClientRepository.save(c);
	}

	@Override
	public Client updateClient(Client c) {
		return ClientRepository.save(c);
	}

	@Override
	public void deleteClient(Client c) {
		ClientRepository.delete(c);
		
	}

	@Override
	public void deleteClientById(Long id) {
		ClientRepository.deleteById(id);
		
	}

	@Override
	public Client getClient(Long id) {
		return ClientRepository.findById(id).get();
	}

	@Override
	public List<Client> getAllClients() {
		
		return ClientRepository.findAll();
	}

    public Client findById(Long id) {
        return ClientRepository.findById(id).get();
    }
	
	

}
