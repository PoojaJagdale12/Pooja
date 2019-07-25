package com.cts.vehicleservice.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.vehicleservice.model.User;
import com.cts.vehicleservice.model.VehicleBooking;

import com.cts.vehicleservice.service.VehiclebookingService;


@RestController
@RequestMapping("/book")
@CrossOrigin
public class VehicleBookingController {

	
@Autowired
		private VehiclebookingService bookService;
		
		@GetMapping("/showAllbookings")
		public ResponseEntity<List<VehicleBooking>> getAll() {
			
			System.out.println("In get all controller...");
			return new ResponseEntity<List<VehicleBooking>>(bookService.getAllbooking(),HttpStatus.OK);
		}

		 
		@GetMapping("/{bookingId}")
		public ResponseEntity<VehicleBooking>getbooking(@PathVariable Integer bookingId){
			ResponseEntity<VehicleBooking>  response=null;
			
			VehicleBooking VehicleBooking=bookService.getbooking(bookingId);
			
			if(VehicleBooking!=null){
				response=new ResponseEntity<VehicleBooking>(VehicleBooking,HttpStatus.OK);
			}
			else {
				response=new ResponseEntity<VehicleBooking>(VehicleBooking,HttpStatus.NOT_FOUND);		
			}
			return response;
		}
		
		@PostMapping("/addbooking")
		public ResponseEntity<VehicleBooking> addbooking(@RequestBody VehicleBooking VehicleBooking){
			
			System.out.println("Inside add user....");
			String date = "2017-03-08 ";
	        DateTimeFormatter f= DateTimeFormatter.ofPattern("yyyy-MM-dd");
			ResponseEntity<VehicleBooking> response=null;
			VehicleBooking respUser=bookService.savebooking(VehicleBooking);
			if (respUser	==null) {
				response=new ResponseEntity<VehicleBooking>(HttpStatus.OK);
				
			}
			else
			{
				response=new ResponseEntity<VehicleBooking>(respUser,HttpStatus.OK);
			}
			return response;
		}
		
		/*@PutMapping
		public ResponseEntity<User> updateUser(@RequestBody User User){
			
			System.out.println("Inside update user....");
			
			ResponseEntity<User> response=null;
			User respUser=UserService.saveUser(User);
			if (respUser	==null) {
				response=new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
				
			}
			else
			{
				response=new ResponseEntity<User>(respUser,HttpStatus.OK);
			}
			return response;
		}*/
		
		
		@DeleteMapping("/deletebooking/{bookingId}")
		public ResponseEntity<Void> deletebooking(@PathVariable Integer bookingId){
			
			ResponseEntity<Void> response=null;
			boolean isDeleted=VehiclebookingService.deletebooking(bookingId);
			
					if (isDeleted) {
				response=new ResponseEntity<Void>(HttpStatus.OK);
				
			}
			else
			{
				response=new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
			}
			return response;
		}
		
	}

