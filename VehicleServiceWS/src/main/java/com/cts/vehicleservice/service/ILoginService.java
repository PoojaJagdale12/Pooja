package com.cts.vehicleservice.service;

import com.cts.vehicleservice.model.Login;

public interface ILoginService {
	
	void saveUserLogin(String userName,Integer userId,String password);
	
	boolean validateUser(Login login);

}
