import { Component, OnInit } from '@angular/core';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import{booking} from '../vehicleapplication/booking';

@Component({
  selector: 'app-bookservicing',
  templateUrl: './bookservicing.component.html',
  styleUrls: ['./bookservicing.component.css']
})
export class BookservicingComponent implements OnInit {

 newApplication: booking;
  bookingForm: FormGroup;
   success: string;
  constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router) { 

    this.bookingForm=new FormGroup(
      {
         // bookingId: new FormControl(),
          firstname:new FormControl(),
          lastname: new FormControl(),
          contactNo:new FormControl(),
          vehicleNo: new FormControl(),
          vehicleType:new FormControl(),
          date: new FormControl(),
      

      }
    
    );
  }

  ngOnInit() {
  }

   addbooking() {

    this.newApplication = this.bookingForm.value;
    console.log('firstName...:'+this.newApplication);
    this.vehicleApplicationService.addbooking(this.newApplication);
    alert("You have successfully Booked Servicing")
    this.router.navigate(['/customer-dashboard']);
    
  }
  

}


  
