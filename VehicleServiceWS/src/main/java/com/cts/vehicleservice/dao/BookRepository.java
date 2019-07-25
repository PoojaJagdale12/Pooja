package com.cts.vehicleservice.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cts.vehicleservice.model.User;
import com.cts.vehicleservice.model.VehicleBooking;

public interface BookRepository extends JpaRepository<VehicleBooking, Integer> {
	/*@Query("SELECT firstname,lastname,contactNo,vehicleNo,date FROM book where bookingId=:bookingId")
	List<VehicleBooking> findOneByBookingId(@Param("bookingId")Long bookingId);
*/

	List<VehicleBooking> findOneByBookingId(Integer bookingId);
}
