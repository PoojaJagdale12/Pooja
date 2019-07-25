import { Injectable } from '@angular/core';
import {VehicleUsers} from '../vehicleapplication/vehicle-users';
import {Login} from '../vehicleapplication/Login';
import{booking} from '../vehicleapplication/booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class VehicleApplicationService {
  vehicleusers: VehicleUsers[] = [];
  booking:booking[]=[];
  user: Login;
 

  router: Router;
  
 
  
  constructor(private httpClient: HttpClient) { }

  // Add a loan application
  addUser(user:VehicleUsers) {
    console.log('Inside verhicle service addmethod...'+user.email )
    this.httpClient.post('http://localhost:7777/users/newuser', user).subscribe((response) => {
      console.log('Inside angular add service.....');
    });
  }
   verifyUser(user:Login) {  
  this.user = user;
  
    console.log('Inside vehicle service verify user...'+user.userName+ user.userType+user.password);
     return this.httpClient.post('http://localhost:7777/users/validate', user);
  }

  showUsers() {
    console.log('Inside vehicle service show users dmethod...')
    return this.httpClient.get('http://localhost:7777/users/showAllUsers');
  }


showUserProfile(user:Login){
   this.user = user;
  console.log('Inside vehicle service show user method'+user.userName)
  return this.httpClient.get('http://localhost:7777/users/userName');
}


  showServiceHistory(){
    console.log('Inside vehicle service show service history')
    return this.httpClient.get('http://localhost:7777/book/showAllbookings');
  }


   addbooking(user:booking) {
    console.log('Inside vehicle service addmethod...'+user.vehicleType
    )
    this.httpClient.post('http://localhost:7777/book/addbooking',user).subscribe((response) => {
      console.log('Inside angular add service.....');
    });
  }

 

}


 



