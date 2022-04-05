package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Client {	
	@Id
	@GeneratedValue ( strategy = GenerationType.IDENTITY)
	private Long idClient;
	private String nomClient;
	private Long telClient;
	private String emailClient;
	private String adresse;
	private Double total;
	private Double Reste;



	public Client() {
		super();
	}
	
	
	public Client(long idclient, String nomClient, Long telClient, String emailClient, String adresse) {
		super();
		this.idClient = idclient ; 
		this.nomClient = nomClient;
		this.telClient = telClient;
		this.emailClient = emailClient;
		this.adresse = adresse;
		this.total = (double) 0 ;
		this.Reste = (double) 0 ;

	}


	public Long getIdClient() {
		return idClient;
	}
	
	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}
	public String getNomClient() {
		return nomClient;
	}
	public void setNomClient(String nomClient) {
		this.nomClient = nomClient;
	}
	public Long gettelClient() {
		return telClient;
	}
	public void settelClient(Long telClient) {
		this.telClient = telClient;
	}
	public String getemailClient() {
		return emailClient;
	}
	public void setemailClient(String emailClient) {
		this.emailClient = emailClient;
	}
	public String getadresse() {
		return adresse;
	}
	public void setadresse(String adresse) {
		this.adresse = adresse;
	} 
	public Double gettotal() {
		return total;
	}
	public void settotal(Double total) {
		this.total = total;
	} 
	public Double getReste() {
		return Reste;
	}
	public void setReste(Double Reste) {
		this.Reste = Reste;
	} 



	@Override
	public String toString() {
		return "Client [idClient=" + idClient + ", nomClient=" + nomClient + ", telClient=" + telClient
				+ ", emailClient=" + emailClient + "]";
	}
	
	

}
