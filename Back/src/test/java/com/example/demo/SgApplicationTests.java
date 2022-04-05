package com.example.demo;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.repository.*;
import com.example.demo.entity.*;
@SpringBootTest
class SgApplicationTests {

	@Autowired
	private ClientRepository ClientRepository;
	
	@Test
	public void testCreateClient() {
	Client cl = new Client(69000,"Ali",(long) 656,"aa@com","R4");
	ClientRepository.save(cl);
	}
	
	@Test
	public void testFindClient()
	{
	Client c = ClientRepository.findById( (long) 69000).get();
	System.out.println(c);
	}
	
	@Test
	public void testUpdateClient(String add)
	{
	Client c = ClientRepository.findById( (long) 69000).get();
	c.setadresse(add);
	ClientRepository.save(c);
	
	System.out.println(c);
	}
	
	@Test
	public void testDeleteClient()
	{
		ClientRepository.deleteById((long) 11423089);
	}
	
	@Test
	public void testFindAllClients()
	{
		List<Client> cls = ClientRepository.findAll();
		
		for (Client c:cls)
			 System.out.println(c);
		
	}
	
	
	
	
}