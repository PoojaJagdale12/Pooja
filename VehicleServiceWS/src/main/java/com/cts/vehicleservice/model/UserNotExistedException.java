package com.cts.vehicleservice.model;

public class UserNotExistedException {
	
	String code;
	String status;
	
	public UserNotExistedException(){
		this.code="422";
		this.status="User is not existed in database...";
	}
	
	
	

}
