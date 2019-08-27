import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public logout: boolean;
  public navBarColor = environment.navBarBackgroundColor;


  @ViewChild('LoginComponent') dialogReminder: TemplateRef<any>;
  constructor(private matDialogWindow: MatDialog) { }

  ngOnInit() {
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
}
