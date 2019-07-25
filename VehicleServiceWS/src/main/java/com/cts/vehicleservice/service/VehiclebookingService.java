package com.cts.vehicleservice.service;

import com.cts.vehicleservice.model.VehicleBooking;

import java.util.List;



public interface VehiclebookingService {
  
	  VehicleBooking savebooking(  VehicleBooking   VehicleBooking);
	static boolean deletebooking(Integer bookingId) {
		// TODO Auto-generated method stub
		return false;
	}
	  VehicleBooking getbooking(Integer bookingId);
	List<  VehicleBooking>getAllbooking();

}
