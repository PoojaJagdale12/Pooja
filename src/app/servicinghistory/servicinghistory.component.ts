import { Component, OnInit } from '@angular/core';
import{booking} from '../vehicleapplication/booking';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servicinghistory',
  templateUrl: './servicinghistory.component.html',
  styleUrls: ['./servicinghistory.component.css']
})
export class ServicinghistoryComponent implements OnInit {
  public Users:booking;
  newApplication:booking;
   bookingForm: FormGroup;
   allbookings:any;


  constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router) {
    this.bookingForm = new FormGroup(
      {
        firstName: new FormControl(),
        lastName: new FormControl(),
        contactNo: new FormControl(),
        vehicleNo: new FormControl(),
        date: new FormControl(),
       

      }
    );
  }


 
  ngOnInit() {
    this.vehicleApplicationService.showServiceHistory().subscribe(
     (response) => {
       this.allbookings = Object.assign([], response);
     }); 
 }
}
