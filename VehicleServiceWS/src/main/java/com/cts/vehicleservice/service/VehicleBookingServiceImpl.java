package com.cts.vehicleservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.vehicleservice.dao.BookRepository;
import com.cts.vehicleservice.dao.UserRepository;
import com.cts.vehicleservice.model.User;
import com.cts.vehicleservice.model.VehicleBooking;
@Service
public class VehicleBookingServiceImpl implements VehiclebookingService {
	@Autowired
	private BookRepository bookRepo;
	
	@Override
	public VehicleBooking savebooking(VehicleBooking VehicleBooking) {
		System.out.println("Inside crud repo...");
		if(VehicleBooking!=null ) {
			System.out.println("New User...");
			
			try {
				VehicleBooking=bookRepo.save(VehicleBooking);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return VehicleBooking;
	}
	public boolean deletebooking(Integer bookingId) {
		boolean isDeleted=false;
		if(null!=bookingId && bookRepo.existsById(bookingId)) {
			bookRepo.deleteById(bookingId);
			isDeleted=true;
		}
		
		return isDeleted;
	}

	

	@Override
	public List<VehicleBooking> getAllbooking() {
		
		return bookRepo.findAll();
	}

	@Override
	public VehicleBooking getbooking(Integer bookingId) {
		
		System.out.println("*******IN SERVICE IMPL**********");
		
		VehicleBooking VehicleBooking=null;
		if (bookRepo.existsById(bookingId)) {
			VehicleBooking=bookRepo.findById(bookingId).get();
			
		}
		
		return VehicleBooking;
	}

	
	
}
