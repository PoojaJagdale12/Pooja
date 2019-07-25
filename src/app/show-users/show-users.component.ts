import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VehicleUsers } from '../vehicleapplication/vehicle-users';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  public Users: VehicleUsers;
  newApplication: VehicleUsers;
  userForm: FormGroup;
  allUsers: any;

  
  constructor(private vehicleApplicationService: VehicleApplicationService, private router: Router) {

    this.userForm = new FormGroup(
      {
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        userName: new FormControl(),
        address: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(),
        password: new FormControl()

      }
    );
  }



/*   ngOnInit() {
     this.vehicleApplicationService.showUsers().subscribe(
      (response) => {
        this.allUsers = Object.assign([], response);
      }); 
  } */

  ngOnInit() {
    this.vehicleApplicationService.showUsers().subscribe(
     (response) => {
       this.allUsers = Object.assign([], response);
     }); 
 }

  // showAllusers() {
  //   console.log('firstName...:' + this.newApplication);
  //   this.vehicleApplicationService.showUsers().subscribe((data: {}) => {
  //     console.log(data[0]);

  //     if (data != null) {
  //       this.router.navigate(['/user-register']);
  //     }
  //   },
  //     err => {
  //       console.log("Invalid user....>>>:");
  //     });
  // }

}
