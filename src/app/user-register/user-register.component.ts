import { Component, OnInit } from '@angular/core';
import {VehicleUsers} from '../vehicleapplication/vehicle-users';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  newApplication: VehicleUsers;
  userForm: FormGroup;


  constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router) { 

    this.userForm=new FormGroup(
      {
          firstName:new FormControl(),
          lastName: new FormControl(),
          email:new FormControl(),
          userName: new FormControl(),
          address:new FormControl(),
          state: new FormControl(),
          city: new FormControl(),
          pincode: new FormControl(),
          password: new FormControl()

      }
    
    );
  }

  ngOnInit() {
   
  }

  registerUser() {

    this.newApplication = this.userForm.value;
    console.log('firstName...:'+this.newApplication);
    this.vehicleApplicationService.addUser(this.newApplication);
    this.router.navigate(['/user-login']);
  }

}
