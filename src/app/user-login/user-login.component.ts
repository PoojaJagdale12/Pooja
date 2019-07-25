import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../vehicleapplication/Login';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  //logins:any = [];

  newApplication: Login;
  loginForm: FormGroup;
  public Login: Login;

  constructor(private vehicleApplicationService: VehicleApplicationService, private router: Router) {
    this.Login = new Login();
    this.loginForm = new FormGroup(
      {
        userName: new FormControl(),
        password: new FormControl(),
        userType: new FormControl()

      }

    );
  }

  ngOnInit() {
  }

  validateUser() {
    this.newApplication = this.loginForm.value;
    console.log('firstName...:' + this.newApplication);
    this.vehicleApplicationService.verifyUser(this.Login).subscribe((data: {}) => {

      if (data != null) {
        this.router.navigate(['/customer-dashboard']);
      }
    },
      err => {
        console.log("Invalid user....>>>:");
      });


  }
}
