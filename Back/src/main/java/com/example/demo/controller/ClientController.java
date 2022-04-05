package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.ClientServiceImpl;
import com.example.demo.entity.Client;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ClientController {

	@Autowired
	private ClientServiceImpl ClientServiceImpl;
	
	// get all Clients
	@GetMapping("/Clients")
	public List<Client> getAllClients(){
		return ClientServiceImpl.getAllClients();
	}		
	
	// create Client 
	@PostMapping("/Clients")
	public Client createClient(@RequestBody Client Client) {
		return ClientServiceImpl.saveClient(Client);
	}
	//get Client by id 
	@GetMapping("/Clients/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		Client Client = ClientServiceImpl.findById(id) ;
		System.out.println(Client);
		return ResponseEntity.ok(Client);
	}
	
	// // update Client
	
	@PutMapping("/Clients/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client ClientDetails){
		Client Client = ClientServiceImpl.findById(id);
		Client.setNomClient(ClientDetails.getNomClient());
		Client.setadresse(ClientDetails.getadresse());

		Client.settelClient(ClientDetails.gettelClient());
		Client.setemailClient(ClientDetails.getemailClient());
		Client updatedClient = ClientServiceImpl.saveClient(Client);
		return ResponseEntity.ok(updatedClient);
	}
	
	// // delete Client 
	@DeleteMapping("/Clients/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
		Client Client = ClientServiceImpl.findById(id);
		ClientServiceImpl.deleteClient(Client);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
