import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Employee } from '../models/employee';

@Component({
  selector: 'front-page',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class frontpageComponent {
  title = 'Welcome to Angular 5';
  public customer: MatTableDataSource<Employee>;
  public tableColumns: string[] = ['idcustomer','firstName','lastName','age','address','phoneNumberl'];
  constructor(private custService: CustomerService) {
    this.customer = new MatTableDataSource<Employee>([]);
   }

ngOnInit() {
  this.custService.getCustomerbyAPI()
  .subscribe((resp: Employee[]) => {
    this.customer = new MatTableDataSource<Employee>(resp);
    console.log(resp);
  });
}

  getCustomerDetails() {
    this.custService.getCustomer()
      .subscribe((resp: Employee[]) => {
        this.customer = new MatTableDataSource<Employee>(resp);
        console.log(resp);
      }

      )


  }


}
