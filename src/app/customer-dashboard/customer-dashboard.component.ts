import { Component, OnInit } from '@angular/core';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import {Login} from '../vehicleapplication/Login';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
user: Login; 
  constructor(private vehicleApplicationService: VehicleApplicationService) { }

  ngOnInit() {
    this.user=this.vehicleApplicationService.user; 
  }

}
