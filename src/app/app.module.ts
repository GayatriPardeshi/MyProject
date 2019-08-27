import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontPage/frontpage.component';
import { MatButtonModule, MatTableModule, MatDialogModule} from '@angular/material';


import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule ,
  MatInputModule,

} from '@angular/material';
import { AgmCoreModule } from '@agm/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDerictiveDirective } from './my-derictive.directive';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
// services
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    DashboardComponent,
    MyDerictiveDirective,
    CustomerComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    ToastNotificationsModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'users',
        component: FrontpageComponent
      },
      {
        path: 'users/:idcustomer',
        component: FrontpageComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },

      {
        path: '**',
        component: DashboardComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'https://cloud.google.com/maps-platform/?_ga=2.39905762.1945208324.1566296060-1956308148.1565243939#get-started'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  exports: [MatButtonModule, MatTableModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
