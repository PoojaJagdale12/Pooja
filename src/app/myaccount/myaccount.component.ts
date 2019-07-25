import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VehicleUsers } from '../vehicleapplication/vehicle-users';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  public Users: VehicleUsers;
  newApplication: VehicleUsers;
  userProfileForm: FormGroup;
  userProfile: any;

  constructor(private vehicleApplicationService: VehicleApplicationService, private router: Router) {
    this.userProfileForm = new FormGroup(
      {
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        address: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl()

      }
    );
  } 

  ngOnInit() {
    this.vehicleApplicationService.showUserProfile().subscribe(   (response) =>{
       this.userProfile = Object.assign([], response);
     });
  }
 
}


