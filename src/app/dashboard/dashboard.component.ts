import * as core from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { environment } from 'src/environments/environment';

/*---services----- */
import { CustomerService } from '../../services/customer.service';
import { from } from 'rxjs';

import { ViewChild, TemplateRef, Component, OnInit } from '@angular/core';

import { FrontpageComponent } from '../frontPage/frontpage.component';
import { BookingComponent } from '../booking/booking.component';

export interface SrcDesti {
  id: string;
  source: string;
  destination: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   minDate = new Date();
   maxDate = new Date(2019, 10, 30);
  public logout: boolean;
  public navBarColor = environment.navBarBackgroundColor;
  srcDistiArray: SrcDesti[];
  // srcDistiArray: [];
  @ViewChild('LoginComponent') dialogReminder: TemplateRef<any>;


  constructor(private matDialogWindow: MatDialog, private custService: CustomerService) { }

  myFilter = (d: Date): boolean => {
    const day = d.getFullYear();
    console.log(day);
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  ngOnInit() {
    this.custService.getCustomerSrcDestiByApi()
    .subscribe((resp: SrcDesti[]) => {
    console.log(resp);
    this.srcDistiArray = resp;
  });
  }

  onLogout() {
    this.logout = true;
  }

  openDialog(): void {
    let dialogRef;
    dialogRef = this.matDialogWindow.open(LoginComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  bookingDialog(): void {

    console.log("hi");
    let dialogRef;
    dialogRef = this.matDialogWindow.open(BookingComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
