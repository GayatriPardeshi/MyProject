import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { frontpageComponent } from './frontPage/frontpage.component';
import {  MatButtonModule, MatTableModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDerictiveDirective } from './my-derictive.directive';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    frontpageComponent,
    DashboardComponent,
    MyDerictiveDirective,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    
    RouterModule.forRoot([
      {
        path:'users' ,
        component: frontpageComponent
      },
      {
        path:'users/:idcustomer' ,
        component: frontpageComponent
      },
      {
        path:'**' ,
        component: DashboardComponent
      }
    ])
  ],
  exports: [MatButtonModule,  MatTableModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
