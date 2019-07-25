import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component'
import {UserRegisterComponent} from './user-register/user-register.component'
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import {ShowUsersComponent} from './show-users/show-users.component';
import { BookservicingComponent } from './bookservicing/bookservicing.component';
import { LogoutComponent } from './logout/logout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ServicinghistoryComponent } from './servicinghistory/servicinghistory.component';



const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'show-users', component: ShowUsersComponent },
  {path: 'user-register', component: UserRegisterComponent},
  {path:'customer-dashboard',component:CustomerDashboardComponent},
  {path:'bookservicing',component:BookservicingComponent},
 {path:'logout',component:LogoutComponent},
 {path:'myaccount',component:MyaccountComponent},
  {path:'servicinghistory',component:ServicinghistoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
