import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { from, Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { Employee } from '../models/employee';
import { MatTableDataSource, MatSort } from '@angular/material';
;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer: MatTableDataSource<Employee>;
  public ary: [];
  public status: boolean = true;
  public tableColumns: string[] = ['CustomerName','CustomerLName'];
  constructor(private custService: CustomerService) {
    this.customer = new MatTableDataSource<Employee>([]);
   }

  ngOnInit() {
    this.custService.getCustomer()
      .subscribe((resp: Employee[]) => {
        this.customer = new MatTableDataSource<Employee>(resp);
      } 
        
        // this.ary = this.customer.map(o => this.customer[0].firstName);
        
      )
    // this.getCustomerPromise().then((status) =>
    //   setTimeout(function () {
    //     console.log(status)
    //   }), 2000);
    // console.log("hi");

  }
  // public getCustomerPromise(): any {
  //   return new Promise(result => {

  //     result("abcd");

  //   });
  }


