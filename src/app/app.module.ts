import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { VehicleApplicationService } from './vehicleapplication/vehicle-application.service';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { BookservicingComponent } from './bookservicing/bookservicing.component';
import { LogoutComponent } from './logout/logout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ServicinghistoryComponent } from './servicinghistory/servicinghistory.component';




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavbarComponent,
    CustomerDashboardComponent,
    ShowUsersComponent,
    BookservicingComponent,
    LogoutComponent,
    MyaccountComponent,
    ServicinghistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ VehicleApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
